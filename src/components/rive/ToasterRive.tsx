/* eslint-disable no-console */
import ToasterRiveImg from '@/assets/rive/toaster.riv?url';
import {
  EventType,
  useRive,
  useStateMachineInput,
} from '@rive-app/react-canvas';
import { useEffect, useRef, useState } from 'react';

const STATE_MACHINE_NAME = 'State Machine 1';
const BAR_CLICK_STATE = 'exit';

const TIMER_STATE = {
  'button1 click': 1,
  'button2 click': 2,
  'button3 click': 3,
};

const ToasterRive = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [, setStreamVideo] = useState<MediaStream | null>(null);

  const [timer, setTimer] = useState(1);
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

  //   const stateBar = useStateMachineInput(
  //     rive,
  //     STATE_MACHINE_NAME,
  //     'bar click trigger',
  //   );

  const stateTime = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    'time count',
  );

  const clickBar = () => {
    // if (stateBar) {
    //   console.log('bar');
    //   stateBar.fire();
    // }

    if (stateToastUp) {
      stateToastUp.value = false;

      setTimeout(() => {
        stateToastUp.value = true;
      }, 1000 * timer);
    }

    if (stateTime) {
      setTimer(Number(stateTime.value));
      console.log(stateTime.value);
    }
  };

  useEffect(() => {
    console.log('?');
    if (!rive) return;
    console.log('rive');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (event: any) => {
      if (!event.data) return;

      console.log('🌀 Rive State changed:', event.data);

      if (event.data.includes(BAR_CLICK_STATE) && stateToastUp) {
        clickBar();
      }

      const matchedState = event.data.find(
        (state: string) => state in TIMER_STATE,
      );

      if (matchedState && stateTime) {
        console.log('state', stateTime.value);
        setTimer(Number(stateTime.value));
      }

      console.log(timer);
    };

    rive.on(EventType.StateChange, handler);

    return () => {
      rive.off(EventType.StateChange, handler);
    };
  }, [rive, stateToastUp, stateTime]);

  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        setStreamVideo(stream);
        const video = videoRef.current;
        if (video) {
          video.srcObject = stream;
          video.play();
        }
      })
      .catch(error => {
        console.error('Error opening camera:', error);
      });
  };

  return (
    <div className="relative w-full aspect-[830/467]">
      <RiveComponent
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
        }}
      />
      <video
        ref={videoRef}
        width="540"
        className="absolute top-100 left-100 w-[540px] scale-x-[-1] aspect-[3/2] object-cover object-center z-0"
      />
    </div>
  );
};

export default ToasterRive;
