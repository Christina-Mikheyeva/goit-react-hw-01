import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        <li>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                status={isOnline}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
