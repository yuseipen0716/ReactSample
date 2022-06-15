import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { Image } from './components/Image';


const App = () => {
  // NameArea
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);

  return (
    <>
      <Image />
      <NameArea
        name={name}
        onChangeName={onChangeName}
      />
    </>
  )
};

export default App;
