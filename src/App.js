import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [DATAS, setDATAS] = useState([])
  function getIT() {
    Axios.get('http://127.0.0.1:5174/get').then((response) => { console.log(response.data); setDATAS(Object.values(response.data)); });
    }


 //oldal betöltésekor egyszer lekérdezni a DB-t
 useEffect(() => {
  
    getIT();

}, []);


function print() {
  var printContents = document.getElementById('printarea').innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

  return (
    <div className="App">
      <div id='printarea'>
      <div className="App-left">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Electron x React billing software
        </p>
        {
            //tabla listazasa
            DATAS.map(function (obj, e) {
                return (<p>{obj.id}</p>)
            })
          }
      </div>
      </div>
      <div className="App-right">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Electron x React billing software
        </p>
       <button onClick={print} >NYOMTATÁS</button>
      </div>

    </div>
  );
}

export default App;
