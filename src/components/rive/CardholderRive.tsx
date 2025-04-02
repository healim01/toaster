import CardholderRiveImg from '@/assets/rive/cardholder.riv?url';
import Button from '@/components/_common/Button/Button';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

const STATE_MACHINE_NAME = 'State Machine';

const CardholderRive = () => {
  const { rive, RiveComponent } = useRive({
    src: CardholderRiveImg,
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  const stateCard1 = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Card 1');
  const stateCard2 = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Card 2');
  const stateCard3 = useStateMachineInput(rive, STATE_MACHINE_NAME, 'Card 3');

  const clickCard1 = () => {
    if (stateCard1) {
      stateCard1.value = true;

      setTimeout(() => {
        stateCard1.value = false;
      }, 1000);
    }
  };

  const clickCard2 = () => {
    if (stateCard2) {
      stateCard2.value = true;

      setTimeout(() => {
        stateCard2.value = false;
      }, 1000);
    }
  };

  const clickCard3 = () => {
    if (stateCard3) {
      stateCard3.value = true;

      setTimeout(() => {
        stateCard3.value = false;
      }, 1000);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <RiveComponent style={{ width: '400px', height: '400px' }} />
      </div>
      <Button label="Card 1 Button" onClick={() => clickCard1()} />
      <Button label="Card 2 Button" color="red" onClick={() => clickCard2()} />
      <Button
        label="Card 3 Button"
        color="green"
        onClick={() => clickCard3()}
      />
    </>
  );
};

export default CardholderRive;
