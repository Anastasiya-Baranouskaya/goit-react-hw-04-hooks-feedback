import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <p>{message}</p>;
}
Notification.defaultProps = {
  message: 'No feedback given',
};
Notification.propType = {
  message: PropTypes.string.isRequired,
};
