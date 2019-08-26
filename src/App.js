import React, { useState } from 'react';
import Form from './Form'
import ShowInfo from './ShowInfo'

function App() {
  const [state, setState] = useState({bilnumer: "", nafn: "", kennitala: ""});
  const handleForm = () => {
    
  }
  const inputInfo = (e) => {
    setState({...state,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <Form handleForm={handleForm} inputInfo={inputInfo} />
      <ShowInfo show={state}/>
    </div>
  );
}

export default App;
