import {
  StyledHeader,
  StyledImg,
  StyledPrice,
  StyledRateLocContainer,
} from 'components/CampersItem.jsx/CampersItem.styled';
import css from './index.module.css';
import sprite from '../../assets/svgSprite/sprite.svg';
import BookingForm from 'components/BookingForm/BookingForm';

const CamperModal = ({ camper }) => {
  return (
    <>
      <div>
        <StyledHeader style={{ marginBottom: '10px' }}>
          {camper.name}
        </StyledHeader>
        <StyledRateLocContainer style={{ marginBottom: '16px' }}>
          <svg width="16" height="16" fill="#FFC531" stroke="#FFC531">
            <use xlinkHref={`${sprite}#icon-star`} />
          </svg>
          <p className="reviewsText">{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
          <svg width="16" height="16" fill="none" stroke="#101828">
            <use xlinkHref={`${sprite}#icon-map-pin`} />
          </svg>
          <p className="locationText">
            {camper.location.split(',').reverse().join(', ')}
          </p>
        </StyledRateLocContainer>
        <StyledPrice>{`€${camper.price}.00`}</StyledPrice>
      </div>
      <div className={css.infoContainer}>
        <ul className={css.imgList}>
          {camper.gallery.map((img, idx) => (
            <li key={idx}>
              <StyledImg src={img} alt={camper.name} />
            </li>
          ))}
        </ul>
        <p className={css.styledDescription}>{camper.description}</p>
      </div>
      <div className={css.buttonContainer}>
        <button className={css.styledButton}>Features</button>
        <button className={css.styledButton}>Reviews</button>
      </div>
      <BookingForm />
    </>
  );
};

export default CamperModal;
