import { useState, useEffect } from 'react';
import Sound from 'react-native-sound';

type SoundFiles = {
  [key: string]: string;
};

type SoundType = {
  [key: string]: Sound | undefined;
};

const useSoundManager = (soundFiles: SoundFiles) => {
  const [sounds, setSounds] = useState<SoundType>({});

  useEffect(() => {
    const loadSounds = async () => {
      const loadedSounds: SoundType = {};

      for (const color of Object.keys(soundFiles)) {
        try {
          const sound = new Sound(soundFiles[color], (error) => {
            if (error) {
              console.log(`Failed to load the ${color} sound: `, error);
            } else {
              loadedSounds[color] = sound;
            }
          });
        } catch (error) {
          console.error(
            `Failed to create Sound instance for ${color}: `,
            error,
          );
        }
      }

      setSounds(loadedSounds);
    };

    loadSounds();

    return () => {
      Object.values(sounds).forEach((sound) => {
        if (sound) {
          sound.release();
        }
      });
    };
  }, [soundFiles]);

  const playSound = (color: string) => {
    const sound = sounds[color];
    if (sound) {
      sound.play((success) => {
        if (!success) {
          console.log(`Failed to play ${color} sound`);
        }
      });
    }
  };

  return { playSound };
};

export default useSoundManager;
