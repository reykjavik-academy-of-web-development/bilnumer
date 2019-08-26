import React from 'react';

function ShowInfo(props) {
  return (
    <div>
      <p>{props.show.bilnumer}</p>
      <p>{props.show.nafn}</p>
      <p>{props.show.kennitala}</p>
    </div>
  );
}

export default ShowInfo;
