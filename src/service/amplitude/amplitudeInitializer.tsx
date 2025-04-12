import * as amplitude from '@amplitude/analytics-browser';

const amplitudeApiKey = import.meta.env.VITE_AMPLITUDE_API_KEY ?? '';

export const amplitudeInitializer = () => {
  const init = (userName?: string) => {
    amplitude.init(amplitudeApiKey, userName, {
      defaultTracking: {
        pageViews: false,
      },
      minIdLength: 1,
    });
  };

  return { init };
};
