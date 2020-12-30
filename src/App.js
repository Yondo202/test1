import React,{useState} from 'react'
import Users from "./components/Users"
import styled from 'styled-components'
import NewYear from './components/NewYear'

function App() {
  const  [ token, setToken ] = useState();

 
  return (
    <div className="App">
        {/* <button onClick={clickHandle} >Нэвтрэх</button> */}
        {/* <Users token={token} /> */}
        <NewYear />
    </div>
  );
}

export default App;
