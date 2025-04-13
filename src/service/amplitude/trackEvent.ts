import { AmplitudeService } from '@/service/amplitude/AmplitudeService';

const amplitudeService = new AmplitudeService();

export const trackStartButton = () => {
  amplitudeService.customTrack("[Click] Let's toast 버튼");
};

export const trackTakeToasterButton = () => {
  amplitudeService.customTrack('[Click] 토스터 촬영 버튼');
};

export const trackFilterButton = (filter: string) => {
  amplitudeService.customTrack(`[Click] ${filter} 필터 버튼`);
};

export const trackFrameButton = (frame: string) => {
  amplitudeService.customTrack(`[Click] ${frame} 필터 버튼`);
};

export const trackFinishedEditButton = () => {
  amplitudeService.customTrack('[Click] 사진 편집 완료 버튼');
};

export const trackDownloadButton = () => {
  amplitudeService.customTrack('[Click] 사진 다운로드 버튼');
};

export const trackInstagramButton = () => {
  amplitudeService.customTrack('[Click] 인스타그램 버튼');
};

export const trackGithubButton = () => {
  amplitudeService.customTrack('[Click] 깃허브 버튼');
};

export const trackTistoryButton = () => {
  amplitudeService.customTrack('[Click] 티스토리 버튼');
};

export const trackComplimentDev = () => {
  amplitudeService.customTrack('[Click] 개발자를 칭찬합니다 ❤️');
};
