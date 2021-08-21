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
              text="Jett kawaii with your kunais, super jump and broken superdashes. If you wanna troll your friends don't pick her."
              label="Jett"
              path="/jett"
            />
            <CardItem
              src="images/raze.png"
              text="Raze to make unnecessary jumps and then explode your allies with her grenade and powerfull ult. Good one to pick."
              label="Raze"
              path="/raze"
            />
            <CardItem
              src="images/breach.png"
              text="Breach to flash your allies and then detain your teammates with his kinetic blasts in the wall (?). He can ult to help his enemies."
              label="Breach"
              path="/breach"
            />
            <CardItem
              src="images/omen.png"
              text="Omen gives paranoia to his allies and can teleport in front of his enemies to give free frag."
              label="Omen"
              path="/omen"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/brimstone.png"
              text="Brimstone has a boost to pistols and can use his ult to troll your friends."
              label="Brimstone"
              path="/brimstone"
            />
            <CardItem
              src="images/phoenix.png"
              text="Phoenix can hit the flash in the wall and then get blinded, he has a molotov to heal himself and kill your allies."
              label="Phoenix"
              path="/phoenix"
            />
            <CardItem
              src="images/sage.png"
              text="Sage can heal herself only and wall all of your friends. Her ult can revive an ally in front of the enemies."
              label="Sage"
              path="/sage"
            />
            <CardItem
              src="images/sova.png"
              text="Sova can use his drone to get stabbed in the back, also his shock dart and ult are very usefull to kill your friends."
              label="Sova"
              path="/sova"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/viper.png"
              text="Viper can toxic all your allies with her molly. Her ult allows her to fart really a powerfull toxic poison, but it's not usefull at all."
              label="Viper"
              path="/viper"
            />
            <CardItem
              src="images/cypher.png"
              text="Cypher can use his abilies to lurk, but he can't troll his friends very easy, so don't use Cypher."
              label="Cypher"
              path="/cypher"
            />
            <CardItem
              src="images/reyna.png"
              text="Reyna is the most picked one just because she can heal herself and allows to get more frags. She can't blind her allies, so don't use Reyna."
              label="Reyna"
              path="/reyna"
            />
            <CardItem
              src="images/killjoy.png"
              text="Killjoy has a turret to kill for her, also you can use her molly to kill your lovely friends."
              label="Killjoy"
              path="/killjoy"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/skye.png"
              text="Skye is very powerfull to blind your friends with her beautiful bird, she also can heal your allies, so don't use that ability."
              label="Skye"
              path="/skye"
            />
            <CardItem
              src="images/yoru.png"
              text="Yoru is really god with his flash that can easily blind all the teammates, really good to troll together with his teleport and ult."
              label="Yoru"
              path="/yoru"
            />
            <CardItem
              src="images/astra.png"
              text="Astra can suck her friends with a mini black hole and stun them very easily to help your enemies to kill them. Really good to pick."
              label="Astra"
              path="/astra"
            />
            <CardItem
              src="images/kayo.png"
              text="KAY/O can molly your friends and himself, also his flash is very good because all of his teammates doesn't know to turn yourself. He can use the ult to play fornite."
              label="KAY/O"
              path="/kayo"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
