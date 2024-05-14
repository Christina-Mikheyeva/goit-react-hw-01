import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = clsx(isOnline ? css.online : css.offline);
  return (
    <div>
      <div className={css.item}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
        <p className={`${statusClass} ${css.name}`}>{name}</p>
        <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  );
};

export default FriendListItem;
