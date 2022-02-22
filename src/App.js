import './App.css';
import Profile from '../src/Profile/Profile'

function App() {
  const handleName=(firstname)=>{
    alert (firstname)

  }

  return (
    <div className="App">
     <Profile Fullname= 'Jesser'  Bio='Nothing special'  Profession='developer' handleName={handleName}>
       <img src='https://mobimg.b-cdn.net/v2/fetch/35/355167d4bf1f32d9041f74219c96abf1.png' alt='spongerbob' style={{width:'400px'}} />




     </Profile>






    </div>
  );
}

export default App;
