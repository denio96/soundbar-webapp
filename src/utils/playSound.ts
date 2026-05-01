let currentAudio: HTMLAudioElement | null = null;

const playSound = (file: string, onEnd?: () => void) => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = new Audio(file);
  if (onEnd) currentAudio.addEventListener("ended", onEnd);
  currentAudio.play();
};

export default playSound;
