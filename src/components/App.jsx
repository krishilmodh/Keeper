import { useState } from "react";
import Card from "./Card";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes((previous) => {
      return [...previous, newnote];
    });
    
  }
  function deleteItem(id) {
    setNotes((previous) => {
      return previous.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addNote} />
      {notes.map((noteitems, index) => {
        return (
          <Card
            key={index}
            id={index}
            ondelete={deleteItem}
            title={noteitems.title}
            content={noteitems.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
