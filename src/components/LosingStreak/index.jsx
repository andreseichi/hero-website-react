import './style.css';

export const LosingStreak = () => {
  return (
    <div className="losing-streak">
      <h2 className="valorant-experience">Valorant experience</h2>

      <figure className="losing-streak-wrap">
        <img
          className="losing-streak-img"
          src="/images/losing-streak.jpg"
          alt="Losing streak"
        />
      </figure>
    </div>
  );
};
