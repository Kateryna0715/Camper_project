import css from './index.module.css';

const Notification = ({ message }) => {
  return <p className={css.favText}>{message}</p>;
};

export default Notification;
