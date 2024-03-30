import CampersList from 'components/CampersList/CampersList';
import Loader from 'components/Loader/Loader';
import { StyledLoadButtonContainer, ErrorMessage } from './CatalogPage.styled';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampers } from '../../redux/campers/operations';
import {
  selectAllCampers,
  selectError,
  selectIsLoading,
} from '../../redux/campers/selectors';
import Notification from 'components/Notification/Notification';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectAllCampers);
  const dispatch = useDispatch();

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentCards, setCurrentCards] = useState(4);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

  useEffect(() => {
    if (campers.length > currentCards) {
      setIsLoadMore(true);
    } else {
      setIsLoadMore(false);
    }
  }, [campers, currentCards]);

  const handleLoadMore = () => {
    setCurrentCards(prev => prev + 4);
  };

  return (
    <>
      {error && (
        <ErrorMessage>
          Oops! {error}. Please refresh the page and try again
        </ErrorMessage>
      )}

      {isLoading && <Loader />}

      {!campers && (
        <Notification message="Sorry, there are no campers in our catalog. Please try again later" />
      )}

      <CampersList campers={campers.slice(0, currentCards)} />
      {isLoadMore && !isLoading && (
        <StyledLoadButtonContainer>
          <button type="button" onClick={handleLoadMore}>
            Load more
          </button>
        </StyledLoadButtonContainer>
      )}
    </>
  );
};

export default CatalogPage;
