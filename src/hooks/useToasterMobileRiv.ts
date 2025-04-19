import ToasterRiveImg from '@/assets/rive/toaster-mobile.riv?url';
import riveWasmUrl from '@rive-app/canvas/rive.wasm?url';
import {
  EventCallback,
  EventType,
  RuntimeLoader,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useCallback, useEffect } from 'react';

const STATE_MACHINE_NAME = 'toaster statemachine';
const MOBILE_CLICK_STATE = 'click_idle';
const STATE_NAME = {
  shoot: 'shoot_animation_trigger',
  timer: 'timer_count',
  countdown: {
    1: 'countdown1',
    3: 'countdown3',
    5: 'countdown5',
  },
};

interface Props {
  takePhoto: () => void;
}

RuntimeLoader.setWasmUrl(riveWasmUrl);

const useToasterMobileRiv = ({ takePhoto }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: ToasterRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  const stateShoot = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_NAME.shoot,
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

  const clickBar = useCallback(() => {
    const timer =
      typeof stateTime?.value === 'number' && stateTime.value !== 0
        ? stateTime.value
        : 3;

    controlCountDown(timer);
    controlToast(timer);
  }, [stateTime]);

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
    if (stateShoot) {
      setTimeout(() => {
        stateShoot.fire();
        takePhoto();
      }, 1000 * timer);
    }
  };

  useEffect(() => {
    if (!rive) return;

    const handler: EventCallback = event => {
      if (!Array.isArray(event.data)) return;

      if (event.data.includes(MOBILE_CLICK_STATE)) {
        clickBar();
      }
    };

    rive.on(EventType.StateChange, handler);

    return () => {
      rive.off(EventType.StateChange, handler);
    };
  }, [rive, clickBar]);

  useEffect(() => {});

  return { ToasterRive: RiveComponent };
};

export default useToasterMobileRiv;
