import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { AddressArea } from './components/AddressArea';
import { Image } from './components/Image';
import { HistoryArea } from './components/HistoryArea';
import { TextArea } from './components/TextArea';


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
      <AddressArea />
      <HistoryArea />
      <TextArea />
    </>
  )
};

export default App;
