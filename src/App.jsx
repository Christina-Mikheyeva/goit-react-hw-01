// Import main
import './App.css';
// Components
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
// Jason Data
import userData from './components/JasonData/userData.json';
import friends from './components/JasonData/friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};
export default App;
