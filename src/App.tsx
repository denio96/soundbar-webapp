import { useState } from "react";
import playSound from "./utils/playSound";
import "./App.css";

const tracks = [
  {
    label: "Supersnajper",
    file: `${import.meta.env.BASE_URL}/tracks/audioclip1.mp4`,
  },
  {
    label: "Chciałbym się kiedyś obudzić",
    file: `${import.meta.env.BASE_URL}/tracks/audioclip2.mp4`,
  },
  {
    label: "Test local deploy",
    file: `${import.meta.env.BASE_URL}/tracks/audioclip3.mp4`,
  },
];

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
