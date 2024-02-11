import styles from "@/pages/audio/Audio.module.scss";
import React, { useState } from "react";

export default function Audio() {
  const [playing, setIsPlaying] = useState(false);

  const audioplayer = () => {
    const audioElement = document.getElementById("audioPlayer");
    if (playing) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!playing);
  };

  return (
    <div className={styles.audio_wrapper}>
      <h1 className={styles.button} onClick={audioplayer}>
        Press Start
      </h1>
      <audio
        loop
        className={styles.player}
        id="audioPlayer"
        src="/audio/start.mp3"
      />
    </div>
  );
}
