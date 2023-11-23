interface SoundFile {
  [key: string]: string;
}

export const soundFiles: SoundFile = {
  red: require('./red.mp3'),
  blue: require('./blue.mp3'),
  green: require('./green.mp3'),
  yellow: require('./yellow.mp3'),
};
