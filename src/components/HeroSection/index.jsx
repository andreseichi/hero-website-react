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
      <p>Let's play valorant?</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
