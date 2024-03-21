import css from './index.module.css';

const HomePageWrapper = () => {
  return (
    <div>
      <img
        className={css.homePicture}
        src="https://storage.mycamper.com/assets/vehicle/motorhome/7615/x699xY8muMqbpBPJoA2Rpy3ZYnACKX0NiyO7vjvk.jpg"
        alt="Camper"
      ></img>
      <div className={css.textContainer}>
        <p className={css.homeText}>
          Buying a camper is an important decision. Among the many options, it
          is easy to get confused when choosing the perfect house on wheels. If
          you choose a house on wheels and look at different trailers, you can
          arrange a test drive by renting a camper.
        </p>
        <p className={css.homeText}>
          This is an ideal option in the conditions of such a variety of campers
          on the market. We offer the option of short-term rentals (from 2 days
          to several weeks) and are ready to offer long-term rentals from
          several weeks.
        </p>
      </div>
    </div>
  );
};

export default HomePageWrapper;
