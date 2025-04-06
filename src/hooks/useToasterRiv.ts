import ToasterRiveImg from '@/assets/rive/toaster.riv?url';
import {
  EventCallback,
  EventType,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1';
const BAR_CLICK_STATE = 'bar';

interface Props {
  takePhoto: () => void;
}

const useToasterRiv = ({ takePhoto }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: ToasterRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  const stateToastUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'isToastUp',
  );

  const stateTime = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'time count',
  );

  const clickBar = () => {
    const time =
      typeof stateTime?.value === 'number' && stateTime.value !== -1
        ? stateTime.value
        : 3;

    if (stateToastUp) {
      stateToastUp.value = false;

      setTimeout(() => {
        stateToastUp.value = true;
        takePhoto();
      }, 1000 * time);
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

  return { ToasterRive: RiveComponent, stateToastUp, stateTime };
};

export default useToasterRiv;
