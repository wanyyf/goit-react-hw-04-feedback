import Notiflix from 'notiflix';
import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      {' '}
      {message} {Notiflix.Notify.warning(message)}
    </>
  );
};
Notification.propTypes = {
  message: propTypes.string.isRequired,
};
export default Notification;
