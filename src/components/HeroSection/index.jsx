import './style.css';

import { Button } from '../Button';

import backgroundVideo from '../../assets/videos/Retake-hero-desktop.mp4';
import posterVideo from '../../assets/images/Retake-hero-poster.jpg';

export const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        preload="true"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        poster={posterVideo}
      />

      <h1>GO VAVA?</h1>
      <p>Let's play valorant together.</p>
      <p>And then lose. And then get a heart attack.</p>

      <div className="hero-btns">
        <a
          href="https://playvalorant.com/pt-br/download/"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </a>

        <a
          href="https://www.youtube.com/watch?v=7ESIgCWnyBg&ab_channel=DanielMartins"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </a>
      </div>
    </div>
  );
};
