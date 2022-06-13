import React, { useState } from 'react';
import './App.css';
import NameArea from './components/NameArea';


const App = () => {
  const [name, setName] = useState("");
  const [furigana, setFurigana] = useState("");

  const onChangeName = (event) => setName(event.target.value);
  const onChangeFurigana = (event) => setFurigana(event.target.value);

  return (
    <>
      <NameArea
        name={name}
        onChangeName={onChangeName}
        furigana={furigana}
        onChangeFurigana={onChangeFurigana}
      />
    </>
  )
};

export default App;
