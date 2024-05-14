import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.flex}>
        <li className={css.flex}>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return friends.length > 0 ? (
              <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              />
            ) : null;
          })}
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
