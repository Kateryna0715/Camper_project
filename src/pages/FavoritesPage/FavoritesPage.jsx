import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';

import CampersList from 'components/CampersList/CampersList';
import Notification from 'components/Notification/Notification';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {favorites.length > 0 ? (
        <CampersList campers={favorites} />
      ) : (
        <Notification
          message="You haven`t added any campers to your favorites yet. 
            Please check our catalog to add favorites campers"
        />
      )}
    </>
  );
};

export default FavoritesPage;
