import * as amplitude from '@amplitude/analytics-browser';

import { getBrowser } from '@/service/amplitude/getBrowser';

export class AmplitudeService {
  private browser: string;

  constructor() {
    this.browser = getBrowser();
  }

  customTrack(eventName: string, eventProps: Record<string, unknown> = {}) {
    amplitude.track(eventName, {
      browser: this.browser,
      ...eventProps,
    });
  }
}
