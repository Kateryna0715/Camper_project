import { Link } from 'react-router-dom';
import css from './index.module.css';
import CampersList from 'components/CampersList/CampersList';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div style={{ marginBottom: '50px' }}>
      {favorites.length > 0 ? (
        <CampersList campers={favorites} />
      ) : (
        <p className={css.favText}>
          There are no favorites yet. Please check our{' '}
          <Link to="/catalog" className={css.favLink}>
            catalog
          </Link>{' '}
          to add favorites campers
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
