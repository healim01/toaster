import ToasterRiveImg from '@/assets/rive/toaster.riv?url';
import {
  EventCallback,
  EventType,
  RuntimeLoader,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1';
const BAR_CLICK_STATE = 'bar';
const STATE_NAME = {
  toast: 'isToastUp',
  timer: 'time count',
  countdown: {
    1: 'countdown1',
    3: 'countdown3',
    5: 'countdown5',
  },
};

interface Props {
  takePhoto: () => void;
}

RuntimeLoader.setWasmUrl(ToasterRiveImg);

const useToasterRiv = ({ takePhoto }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: ToasterRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  const stateToastUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.toast,
  );

  const stateTime = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.timer,
  );

  const stateCountDown1 = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.countdown[1],
  );
  const stateCountDown3 = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.countdown[3],
  );
  const stateCountDown5 = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.countdown[5],
  );

  const clickBar = () => {
    const timer =
      typeof stateTime?.value === 'number' && stateTime.value !== -1
        ? stateTime.value
        : 3;

    controlCountDown(timer);
    controlToast(timer);
  };

  const controlCountDown = (timer: number) => {
    if (stateCountDown1 && timer === 1) {
      stateCountDown1.fire();
    }
    if (stateCountDown3 && timer === 3) {
      stateCountDown3.fire();
    }
    if (stateCountDown5 && timer === 5) {
      stateCountDown5.fire();
    }
  };

  const controlToast = (timer: number) => {
    if (stateToastUp) {
      stateToastUp.value = false;

      setTimeout(() => {
        stateToastUp.value = true;
        takePhoto();
      }, 1000 * timer);
    }
  };

  useEffect(() => {
    if (!rive) return;

    const handler: EventCallback = event => {
      if (!Array.isArray(event.data)) return;

      if (event.data.includes(BAR_CLICK_STATE) && stateToastUp) {
        clickBar();
      }
    };

    rive.on(EventType.StateChange, handler);

    return () => {
      rive.off(EventType.StateChange, handler);
    };
  }, [rive, stateToastUp]);

  useEffect(() => {});

  return { ToasterRive: RiveComponent, stateToastUp, stateTime };
};

export default useToasterRiv;
