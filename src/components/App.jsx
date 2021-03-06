import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState({});

  function onAdd(props) {
    const note = props.note;
    setNotes((prevValue) => {
      return { ...prevValue, note };
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
