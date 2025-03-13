import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ status, avatar, name }) => {
  return (
    <li className={css.friendsLi}>
      <img src={avatar} alt="Avatar" width="100" />
      <p className={css.friendsP}>{name}</p>
      <span className={`${css.status} ${status ? css.green : css.red}`}>
        {status ? 'Online' : 'Offline'}
      </span>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
