import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { AddressArea } from './components/AddressArea';
import { Image } from './components/Image';
import { HistoryArea } from './components/HistoryArea';
import { TextArea } from './components/TextArea';
import { MoreInfoArea } from './components/MoreInfoArea';
import PhotoUpload from './components/PhotoUpload';


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
      <PhotoUpload />
      <AddressArea />
      <HistoryArea />
      <TextArea />
      <MoreInfoArea />
    </>
  )
};

export default App;
