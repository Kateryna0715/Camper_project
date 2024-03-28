import CampersList from 'components/CampersList/CampersList';
import Loader from 'components/Loader/Loader';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampers } from '../redux/campers/operations';
import {
  selectAllCampers,
  selectError,
  selectIsLoading,
} from '../redux/campers/selectors';
import { StyledLoadButtonContainer } from 'components/CampersList/CampersList.styled';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectAllCampers);
  const dispatch = useDispatch();

  const [isLoadMore, setIsLoadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAllCampers({ page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (campers.length % 4 === 0) {
      setIsLoadMore(true);
    } else {
      setIsLoadMore(false);
    }
  }, [campers]);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <>
      {error && (
        <h1
          style={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'red',
            fontSize: '28px',
          }}
        >
          Oops! {error}. Please refresh the page and try again
        </h1>
      )}

      {isLoading && <Loader />}

      <CampersList campers={campers} />
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
