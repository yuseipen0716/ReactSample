import React, { useState } from 'react';
import './App.css';
import NameArea from './components/NameArea';


const App = () => {
  const [name, setName] = useState("");

  const onChangeName = (event) => setName(event.target.value);

  return (
    <>
      <NameArea
        name={name}
        onChange={onChangeName}
      />
    </>
  )
};

export default App;
