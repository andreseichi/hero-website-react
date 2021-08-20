import './style.css';

import { CardItem } from '../CardItem';

export const Cards = () => {
  return (
    <div className="cards">
      <h2>All Agents to pick and lose</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/jett.png"
              text="Jett kawaii with your kunais, a nice voice and broken superdashes"
              label="Jett"
              path="/services"
            />
            <CardItem
              src="images/raze.png"
              text="Raze to make unnecessary jumps and then explode your allies"
              label="Raze"
              path="/services"
            />
            <CardItem
              src="images/breach.png"
              text="Breach to flash your allies and then use his ult to help your enemies"
              label="Breach"
              path="/services"
            />
            <CardItem
              src="images/sage.jpg"
              text="Sage god to heal yourself only and wall the bombsite to prevent the team from escaping the spike detonation"
              label="Sage"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
