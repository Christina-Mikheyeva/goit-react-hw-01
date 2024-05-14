import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  let status = { isOnline };
  const statusClass = clsx(status ? css.online : css.offline);
  return (
    <div>
      <div className={css.item}>
        <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className={`${statusClass} ${css.name}`}>
          {status ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};

export default FriendListItem;
