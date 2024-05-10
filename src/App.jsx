import './App.css'
import Profile from './components/Profile/Profile'
import userData from "./userData.json";

function App() {
console.log (userData )
  return (
    <div>
      {userData.map((el) => { return <Profile name={el.username}/>})}
    </div>
  )
}

export default App
