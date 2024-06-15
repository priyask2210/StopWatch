import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import stopImage from './stop.jpg';
import resumeImage from './resume.jpg';
import startAgainImage from './startagain.jpg';

// Declare and initialize variables
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

function stopWatch() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;

  const displayTime = document.getElementById("displayTime");
  if (displayTime) {
    displayTime.innerHTML = `${h}:${m}:${s}:${ms}`;
  }
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 10);
}

function watchPause() {
  clearInterval(timer);
  timer = null;
}

function watchReset() {
  clearInterval(timer);
  timer = null;
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  const displayTime = document.getElementById("displayTime");
  if (displayTime) {
    displayTime.innerHTML = "00:00:00:000";
  }
}

function MyFun() {
  return (
    <div className="stopwatch">
      <h1 id="displayTime">00:00:00:000</h1>
      <div className='buttons'>
        <img alt="pause" src={stopImage} onClick={watchPause} />
        <img alt="play" src={resumeImage} onClick={watchStart} />
        <img alt="reset" src={startAgainImage} onClick={watchReset} />
      </div>
    </div>
  );
}

// Ensure the component is rendered before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MyFun />, document.getElementById('root'));
});
