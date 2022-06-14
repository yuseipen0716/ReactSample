import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { Image } from './components/Image';


const App = () => {
  // NameArea
  const [name, setName] = useState("");
  // const [todayYear, setTodayYear] = useState("");
  // const [todayMonth, setTodayMonth] = useState("");
  const [todayDate, setTodayDate] = useState("");
  // const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");
  const [check, setCheck] = useState(0);
  const onChangeName = (event) => setName(event.target.value);
  // const onChangeTodayYear = (event) => setTodayYear(event.target.value);
  // const onChangeTodayMonth = (event) => setTodayMonth(event.target.value);
  const onChangeTodayDate = (event) => setTodayDate(event.target.value);
  // const onChangeBirthYear = (event) => setBirthYear(event.target.value);
  const onChangeBirthMonth = (event) => setBirthMonth(event.target.value);
  const onChangeBirthDate = (event) => setBirthDate(event.target.value);
  const onChangeAge = (event) => setAge(event.target.value);
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
        // todayYear={todayYear}
        // onChangeTodayYear={onChangeTodayYear}
        // todayMonth={todayMonth}
        // onChangeTodayMonth={onChangeTodayMonth}
        todayDate={todayDate}
        onChangeTodayDate={onChangeTodayDate}
        // birthYear={birthYear}
        // onChangeBirthYear={onChangeBirthYear}
        birthMonth={birthMonth}
        onChangeBirthMonth={onChangeBirthMonth}
        birthDate={birthDate}
        onChangeBirthDate={onChangeBirthDate}
        age={age}
        onChangeAge={onChangeAge}
        check={check}
        onClickCheckFirst={onClickCheckFirst}
        onClickCheckSecond={onClickCheckSecond}
      />
    </>
  )
};

export default App;
