const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p>{isOnline}</p>
      </div>
    </div>
  );
};

export default FriendListItem;
