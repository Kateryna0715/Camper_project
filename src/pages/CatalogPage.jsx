import CampersList from 'components/CampersList/CampersList';
import Loader from 'components/Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCampers } from '../redux/campers/operations';
import {
  selectAllCampers,
  selectError,
  selectIsLoading,
} from '../redux/campers/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectAllCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch]);

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
    </>
  );
};

export default CatalogPage;
