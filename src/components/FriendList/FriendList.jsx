import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        <li>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return friends.length > 0 ? (
              <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                status={isOnline}
              />
            ) : null;
          })}
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
