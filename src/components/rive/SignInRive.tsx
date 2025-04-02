import TeddyRiveImg from '@/assets/rive/teddy.riv?url';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1';

interface Props {
  checkLogin: (user: string | null, password: string | null) => boolean;
}

const SignInRive = ({ checkLogin }: Props) => {
  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const { rive, RiveComponent } = useRive({
    src: TeddyRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  useEffect(() => {
    setLook();
  }, [user]);

  const stateSuccess = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'success',
  );
  const stateFail = useStateMachineInput(rive, STATE_MACHINE_NAME, 'fail');
  const stateHandUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'hands_up',
  );

  const stateCheck = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Check');
  const stateLook = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Look');

  const triggerSuccess = () => {
    if (stateSuccess) stateSuccess.fire();
  };
  const triggerFail = () => {
    if (stateFail) stateFail.fire();
  };

  const setHangUp = (hangUp: boolean) => {
    if (stateHandUp) stateHandUp.value = hangUp;
  };

  const setLook = () => {
    if (!stateLook || !stateCheck || !setHangUp) {
      return;
    }
    setHangUp(false);
    setCheck(true);
    let nbChars = 0;
    if (user) {
      nbChars = parseFloat(String(user.split('').length));
    }

    const ratio = nbChars / parseFloat(String(41));

    const lookToSet = ratio * 100 - 25;
    stateLook.value = Math.round(lookToSet);
  };

  const setCheck = (check: boolean) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    checkLogin(user, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center">
          <RiveComponent style={{ width: '400px', height: '400px' }} />
        </div>

        <div className="mt-4">
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <textarea
                onFocus={() => setHangUp(false)}
                onChange={event => setUser(event.target.value)}
                value={user || ''}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                id="email"
                name="email"
                required
                autoFocus
                rows={1}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={event => {
                  setHangUp(true);
                  setPassword(event.target.value);
                }}
                onBlur={() => setHangUp(false)}
                value={password || ''}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="password"
                type="password"
                id="password"
                required
              />
            </div>

            <button
              onMouseOver={() => setHangUp(false)}
              onFocus={() => setHangUp(false)}
              type="button"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => {
                setCheck(true);
                if (checkLogin(user, password)) {
                  triggerSuccess();
                } else {
                  triggerFail();
                }
              }}
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInRive;
