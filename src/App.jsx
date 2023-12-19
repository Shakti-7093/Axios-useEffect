import { useState } from 'react';
import './App.css';

function App(){

  const [them, setThem] = useState('Light');

  let btnToggel = document.querySelector("#them");
  
  document.body.className = them;

  const btnVal = () => {
    if(them === 'Light'){
      btnToggel.innerHTML = 'Dark';
      setThem('Dark');
    }else{
      btnToggel.innerHTML = 'Light';
      setThem('Light')
    }
  }

  return (
    <>
      <div className='container'>
        <div className="them-display">
          <h1>Them</h1>
          <button id='them' onClick={btnVal}>{them}</button>
        </div>
      </div>
      <div className="content">
        <div className="box">useState</div>
        <div className="box">useEffect</div>
        <div className="box">useProp</div>
      </div>
    </>
  )
}

export default App;
