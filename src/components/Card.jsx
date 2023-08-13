import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {

  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>{
        props.ondelete(props.id)
      }}><DeleteIcon /></button>
    </div>
  );
}

export default Card;
