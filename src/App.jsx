import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { Image } from './components/Image';


const App = () => {
  // NameArea
  const [name, setName] = useState("");
  const [check, setCheck] = useState(0);
  const onChangeName = (event) => setName(event.target.value);
  const onClickCheckFirst = () => {
    check === 0 ? setCheck(1) : setCheck(0)
  }
  const onClickCheckSecond = () => {
    check === 0 ? setCheck(2) : setCheck(0)
  }

  return (
    <>
      <Image />
      <NameArea
        name={name}
        onChangeName={onChangeName}
        check={check}
        onClickCheckFirst={onClickCheckFirst}
        onClickCheckSecond={onClickCheckSecond}
      />
    </>
  )
};

export default App;
