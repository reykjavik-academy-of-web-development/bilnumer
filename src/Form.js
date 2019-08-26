import React from 'react';

function Form({handleForm, inputInfo}) {
  return (
    <div>
        <h2>Skráðu bílnúmer</h2>
        <label htmlFor="bilnumer">Bílnúmer</label>
        <input id="bilnumer" maxLength="5" minLength="5" type="text" name="bilnumer" onKeyUp={inputInfo}></input>

        <label htmlFor="nafn">Nafn</label>
        <input id="nafn" type="text" name="nafn" onKeyUp={inputInfo}></input>

        <label htmlFor="kennitala">Kennitala</label>
        <input id="kennitala" maxLength="10" minLength="10" type="number" name="kennitala" onKeyUp={inputInfo}></input>

        <button onClick={handleForm}>Skrá</button>
      
    </div>
  );
}

export default Form;
