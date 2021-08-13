import React from 'react';
import { AiFillPlayCircle as Play } from 'react-icons/ai';
import { AiFillPauseCircle as Pause } from 'react-icons/ai';
import { BiSkipNextCircle as Next } from 'react-icons/bi';
import { BiSkipPreviousCircle as Prev } from 'react-icons/bi';

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => (
  <div className="audio-controls">
    <button type="button" className="prev" aria-label="Previous" onClick={onPrevClick}>
      <Prev />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
    <button type="button" className="next" aria-label="Next" onClick={onNextClick}>
      <Next />
    </button>
  </div>
);

export default AudioControls;
