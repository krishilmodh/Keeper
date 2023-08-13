import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });
  function handleonchange(event) {
    const { value, name } = event.target;
    setnote((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }
  function Submitnote(event) {
    props.onadd(note);
    setnote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleonchange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleonchange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={Submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
