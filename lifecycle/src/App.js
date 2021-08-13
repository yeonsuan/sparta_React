import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifecycleEX from './LifecycleEx'

function App() {

  const [is_show, setIsShow] = React.useState(true);
  return (
    <div className="App">
      
      {is_show? (<LifecycleEX/>):null}

      <button onClick={()=> {setIsShow(false);}}>없어져라~!!!</button>
    </div>
  );
}

export default App;
