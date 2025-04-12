import { AmplitudeService } from '@/service/amplitude/AmplitudeService';
import { useEffect } from 'react';

interface Props {
  eventName: string;
  eventProps?: Record<string, unknown>;
}

export const useTrackPageView = ({ eventName, eventProps }: Props) => {
  const amplitudeService = new AmplitudeService();

  useEffect(() => {
    amplitudeService.customTrack(eventName, eventProps ?? {});
  }, []);
};
