import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/adrs';


function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <div className='discription'>
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
