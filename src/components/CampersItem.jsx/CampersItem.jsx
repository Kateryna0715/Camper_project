import CamperModal from 'components/CamperModal/CamperModal';
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

import {
  StyledCharactersItem,
  StyledCharactersList,
  StyledDescription,
  StyledFavButton,
  StyledHeader,
  StyledHeaderContainer,
  StyledImg,
  StyledItem,
  StyledPrice,
  StyledPriceContainer,
  StyledRateLocContainer,
  StyledShowMoreButton,
} from './CampersItem.styled';
import sprite from '../../assets/svgSprite/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorites,
  removeFavorites,
} from '../../redux/favorites/favoritesSlice';
import { selectFavorites } from '../../redux/favorites/selectors';

const CampersItem = ({ camper }) => {
  const {
    gallery,
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details,
    reviews,
  } = camper;
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const checkId = favorites.find(el => el._id === camper._id);

  const handleFavorites = () => {
    if (!checkId) {
      dispatch(addFavorites(camper));
      return;
    }
    dispatch(removeFavorites(camper._id));
  };

  return (
    <>
      <StyledItem>
        <StyledImg src={gallery[0]} alt={name}></StyledImg>
        <div>
          <StyledHeaderContainer>
            <StyledHeader>{name}</StyledHeader>
            <StyledPriceContainer>
              <StyledPrice>{`€${price}.00`}</StyledPrice>
              <StyledFavButton onClick={handleFavorites}>
                {!checkId ? (
                  <svg width="24" height="24" fill="#ffffff" stroke="#101828">
                    <use xlinkHref={`${sprite}#icon-heart`} />
                  </svg>
                ) : (
                  <svg width="24" height="24" fill="#e44848" stroke="#e44848">
                    <use xlinkHref={`${sprite}#icon-heart`} />
                  </svg>
                )}
              </StyledFavButton>
            </StyledPriceContainer>
          </StyledHeaderContainer>
          <StyledRateLocContainer>
            <svg width="16" height="16" fill="#FFC531" stroke="#FFC531">
              <use xlinkHref={`${sprite}#icon-star`} />
            </svg>
            <p className="reviewsText">{`${rating}(${reviews.length} Reviews)`}</p>
            <svg width="16" height="16" fill="none" stroke="#101828">
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
            <p className="locationText">
              {location.split(',').reverse().join(', ')}
            </p>
          </StyledRateLocContainer>
          <StyledDescription>{description}</StyledDescription>
          <StyledCharactersList>
            <StyledCharactersItem>
              <svg width="20" height="20" fill="#101828">
                <use xlinkHref={`${sprite}#icon-people`} />
              </svg>
              <span>{`${adults} adults`}</span>
            </StyledCharactersItem>

            <StyledCharactersItem>
              <svg width="20" height="20" fill="none" stroke="#101828">
                <use xlinkHref={`${sprite}#icon-container`} />
              </svg>
              <span style={{ textTransform: 'capitalize' }}>
                {transmission}
              </span>
            </StyledCharactersItem>
            <StyledCharactersItem>
              <svg width="20" height="20" fill="#101828">
                <use xlinkHref={`${sprite}#icon-petrol`} />
              </svg>
              <span style={{ textTransform: 'capitalize' }}>{engine}</span>
            </StyledCharactersItem>
            <StyledCharactersItem>
              <svg width="20" height="20" fill="none" stroke="#101828">
                <use xlinkHref={`${sprite}#icon-kitchen`} />
              </svg>
              <span style={{ textTransform: 'capitalize' }}>Kitchen</span>
            </StyledCharactersItem>
            <StyledCharactersItem>
              <svg width="20" height="20" fill="none" stroke="#101828">
                <use xlinkHref={`${sprite}#icon-bed`} />
              </svg>
              <span>{`${details.beds} beds`}</span>
            </StyledCharactersItem>
            <StyledCharactersItem>
              <svg width="20" height="20" fill="#101828" stroke="#101828">
                <use xlinkHref={`${sprite}#icon-ac`} />
              </svg>
              <span>AC</span>
            </StyledCharactersItem>
          </StyledCharactersList>
          <StyledShowMoreButton onClick={openModal}>
            Show more
          </StyledShowMoreButton>
        </div>
      </StyledItem>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CamperModal camper={camper} />
        </Modal>
      )}
    </>
  );
};

export default CampersItem;
