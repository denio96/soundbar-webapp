import { useState } from "react";
import playSound from "./utils/playSound";
import "./App.css";
import tracks from "./utils/tracks";

function App() {
  const [playing, setPlaying] = useState<string | null>(null);

  const handlePlay = (file: string) => {
    playSound(file, () => setPlaying(null));
    setPlaying(file);
  };

  return (
    <div className="panel">
      <div className="panel-title">
        Olsen<span> SoundBoard</span>
      </div>
      {tracks.map((track) => (
        <button
          key={track.file}
          className={`sound-btn ${playing === track.file ? "playing" : ""}`}
          onClick={() => handlePlay(track.file)}
        >
          {track.label}
        </button>
      ))}
    </div>
  );
}

export default App;
