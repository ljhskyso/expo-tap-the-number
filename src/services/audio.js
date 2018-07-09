/* @flow */
/**
 * Simple wrapper on react-native-sound that exposes the sound effects used in the game.
 */
import { Audio } from 'expo';

async function playSound(asset) {
  try {
    await Audio.Sound.create(asset, { shouldPlay: true });
  } catch (error) {
    console.warn('failed to load the SUCCESS sound', err);
  }
}

export default {
  playSuccessSound: () => playSound(require('src/assets/audio/success.wav')),
  playButtonSound: () => playSound(require('src/assets/audio/button.wav')),
  playFailureSound: () => playSound(require('src/assets/audio/failure.wav')),
};
