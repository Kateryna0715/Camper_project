import { Link, NavLink } from 'react-router-dom';
import css from './index.module.css';
import sprite from '../../assets/svgSprite/sprite.svg';

const Header = () => {
  return (
    <div className={css.header}>
      <Link className={css.logoLink} to="/">
        <svg width="32" height="32" fill="none" className={css.logoIcon}>
          <use xlinkHref={`${sprite}#icon-trailer`} />
        </svg>
        MyCamper
      </Link>

      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={css.link} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
