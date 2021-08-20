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
              text="Jett adsad asdada dad d asdad asda sdas d asa sd"
              label="Jett"
              path="/services"
            />
            <CardItem
              src="images/sage.jpg"
              text="Sage God > All"
              label="Sage"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
