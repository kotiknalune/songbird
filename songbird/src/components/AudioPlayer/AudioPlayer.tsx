import React, { Component } from 'react'
import './AudioPlayer.sass'

interface audioProps {
    audio: string
    showContent?: boolean
}

export default class AudioPlayer extends Component<audioProps> {
  getTimeCodeFromNumber(seconds: number) {
    let minutes = seconds / 60;
    seconds -= minutes * 60;
    const hours = minutes / 60;
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
    return `${String(hours).padStart(2, '0')}:${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  }

    render() {
        const { audio } = this.props;
        const itemAudio = new Audio(audio);

        return (
            <div className = {`audio-player ${(this.props.showContent == null) ? '' : 'none'}`}>
            <div className = 'timeline'>
              <div className = 'progress'></div>
            </div>
            <div className = 'controls'>
              <div className = 'play-container'>
                <div className = 'toggle-play play'>
              </div>
              </div>
              <div className = 'time'>
                <div className = 'current'>0:00</div>
                <div className = 'divider'>/</div>
                <div className = 'length'>2:16</div>
              </div>
              <div className = 'volume-container'>
                <div className = 'volume-button'>
                  <div className = 'volume icono-volumeMedium'></div>
                </div>
                <div className = 'volume-slider'>
                  <div className = 'volume-percentage'></div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

// const audioPlayer = document.querySelector('.audio-player');

// audio.addEventListener('loadeddata', () => { audioPlayer?.querySelector('.time .length').textContent = getTimeCodeFromNum(audio.duration); audio.volume = .75;}, false);

// //click on timeline to skip around
// const timeline = audioPlayer?.querySelector('.timeline');
// timeline?.addEventListener('click', e => {
//   const timelineWidth = window.getComputedStyle(timeline).width;
//   const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
//   audio.currentTime = timeToSeek;
// }, false);

// //click volume slider to change volume
// const volumeSlider = audioPlayer.querySelector('.controls .volume-slider');
// volumeSlider.addEventListener('click', e => {
//   const sliderWidth = window.getComputedStyle(volumeSlider).width;
//   const newVolume = e.offsetX / parseInt(sliderWidth);
//   audio.volume = newVolume;
//   audioPlayer.querySelector('.controls .volume-percentage').style.width = newVolume * 100 + '%';
// }, false)

// //check audio percentage and update time accordingly
// setInterval(() => {
//   const progressBar = audioPlayer.querySelector('.progress');
//   progressBar.style.width = audio.currentTime / audio.duration * 100 + '%';
//   audioPlayer.querySelector('.time .current').textContent = getTimeCodeFromNum(
//     audio.currentTime
//   );
// }, 500);

// //toggle between playing and pausing on button click
// const playBtn = audioPlayer.querySelector('.controls .toggle-play');
// playBtn.addEventListener(
//   'click',
//   () => {
//     if (audio.paused) {
//       playBtn.classList.remove('play');
//       playBtn.classList.add('pause');
//       audio.play();
//     } else {
//       playBtn.classList.remove('pause');
//       playBtn.classList.add('play');
//       audio.pause();
//     }
//   },
//   false
// );

// audioPlayer.querySelector('.volume-button').addEventListener('click', () => {
//   const volumeEl = audioPlayer.querySelector('.volume-container .volume');
//   audio.muted = !audio.muted;
//   if (audio.muted) {
//     volumeEl.classList.remove('icono-volumeMedium');
//     volumeEl.classList.add('icono-volumeMute');
//   } else {
//     volumeEl.classList.add('icono-volumeMedium');
//     volumeEl.classList.remove('icono-volumeMute');
//   }
// });