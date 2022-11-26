import { useEffect, useState } from 'react';
import './App.css';
import video from './vid5.mp4';


function App() {

const [tips, setTips] = useState("");

  useEffect(() => {
    getTips();
  }, []);

  const getTips = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const data = await response.json();
  setTips(data.activity);
  console.log(data.activity)
  };

  return (
    <div className="App">
      <div className='container'>
        <h1>what interesting things can we do?</h1>
      </div>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
      <div className='container'> 
        <p> {tips} </p>
        <button onClick={getTips}>Get Tip</button>
      </div>
    </div>
  );
}



export default App;
