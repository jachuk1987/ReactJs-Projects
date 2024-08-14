import React, { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";
import thumb_icon from "../assets/468-thumbnail.png"
import Song_icon from "../assets/song2.mp3"



const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const song = audioRef.current;

    const updateProgress = () => {
      setProgress(song.currentTime);
    };

    song.addEventListener("timeupdate", updateProgress);

    return () => {
      song.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const song = audioRef.current;
    if (song) {
      progressRef.current.max = song.duration;
    }
  }, [audioRef.current?.loadedmetadata]);

  const togglePlayPause = () => {
    const song = audioRef.current;

    if (isPlaying) {
      song.pause();
    } else {
      song.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const song = audioRef.current;
    song.currentTime = e.target.value;
    if (!isPlaying) {
      song.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="container">
      <div className="music-player">
        <nav>
          <div className="circle">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="circle">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
        <img src={thumb_icon} className="song-img" alt="Song Thumbnail" />
        <h1>Despacito</h1>
        <p>Lusi Fonsi Ft. Puerto Rican</p>
        <audio ref={audioRef}>
          <source src={Song_icon} type="audio/mp3" />
        </audio>
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          id="progress"
          ref={progressRef}
        />
        <div className="control">
          <div>
            <i className="fa-solid fa-backward"></i>
          </div>
          <div onClick={togglePlayPause}>
            <i
              className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`}
              id="ctrlIcon"
            ></i>
          </div>
          <div>
            <i className="fa-solid fa-forward"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
