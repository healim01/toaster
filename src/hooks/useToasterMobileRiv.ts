import ToasterRiveImg from '@/assets/rive/toaster-mobile.riv?url';
import riveWasmUrl from '@rive-app/canvas/rive.wasm?url';
import {
  Alignment,
  EventCallback,
  EventType,
  Fit,
  Layout,
  RuntimeLoader,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useCallback, useEffect, useState } from 'react';

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

RuntimeLoader.setWasmUrl(riveWasmUrl);

interface Props {
  takePhoto: () => void;
}

const useToasterMobileRiv = ({ takePhoto }: Props) => {
  const [isShooting, setIsShooting] = useState(false);
  const { rive, RiveComponent } = useRive({
    src: ToasterRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
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

  const clickCamera = useCallback(() => {
    if (isShooting) return;

    const timer =
      typeof stateTime?.value === 'number' && stateTime.value !== 0
        ? stateTime.value
        : 3;

    setIsShooting(true);

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
        setIsShooting(false);
      }, 1000 * timer);
    }
  };

  useEffect(() => {
    if (!rive) return;

    const handler: EventCallback = event => {
      if (!Array.isArray(event.data)) return;

      if (event.data.includes(MOBILE_CLICK_STATE)) {
        clickCamera();
      }
    };

    rive.on(EventType.StateChange, handler);

    return () => {
      rive.off(EventType.StateChange, handler);
    };
  }, [rive, clickCamera]);

  useEffect(() => {});

  return { ToasterMobileRive: RiveComponent };
};

export default useToasterMobileRiv;
