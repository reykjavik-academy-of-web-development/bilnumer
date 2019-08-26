import React, { useState } from 'react';
import Form from './Form'
import ShowInfo from './ShowInfo'


function App() {
  const [state, setState] = useState({bilnumer: "", nafn: "", kennitala: ""});
  const handleForm = () => {
    fetch('http://localhost:3001', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(state)
      
    })
    .then(r=>r.json())
    .then((json)=>{
      console.log(json)      
    });
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
