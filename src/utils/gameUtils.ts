import { SoundFiles } from '~/types';

export const checkSequence = (
  userSequence: string[],
  gameSequence: string[],
): boolean => {
  for (let i = 0; i < userSequence.length; i++) {
    if (userSequence[i] !== gameSequence[i]) {
      return false;
    }
  }
  return true;
};

export const addRandomColorToSequence = (soundFiles: SoundFiles): string => {
  const colors = Object.keys(soundFiles);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
