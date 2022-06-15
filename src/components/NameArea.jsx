import React, { useState } from 'react'
import { Furigana } from './Furigana'
import { FourDigit } from './FourDigit'
import { TwoDigit } from './TwoDigit'
import '../App.css';

// const dateLocate = {
//   position: "absolute",
//   top: "6.4rem",
//   left: "30rem"
// }
// const furiganaLocate = {
//   position: "absolute",
//   top: "8.5rem",
//   left: "13rem",
// }
// const nameLocate = {
//   position: "absolute",
//   top: "12rem",
//   left: "12rem",
// }
// const birthdayLocate = {
//   position: "absolute",
//   top: "17.2rem",
//   left: "9.5rem",
// }
// const checkLocate ={
//   position: "absolute",
//   top: "17rem",
//   left: "35.6rem",
// }

export const NameArea = (props) => {
  const {todayYear, onChangeTodayYear, todayMonth, onChangeTodayMonth, todayDate, onChangeTodayDate, name, onChangeName,
    birthYear, onChangeBirthYear, birthMonth, onChangeBirthMonth, birthDate, onChangeBirthDate, age, onChangeAge, check, onClickCheckFirst, onClickCheckSecond} = props;

  // const [furigana, setFurigana] = useState("");
  // const [fourDigit, setFourDigit] = useState("");
  // const [twoDigit, setTwoDigit] = useState("");
  // const onChangeFurigana = (event) => setFurigana(event.target.value);
  // const onChangeFourDigit = (event) => setFourDigit(event.target.value);
  // const onChangeTwoDigit = (event) => setTwoDigit(event.target.value);

  // const inputName = name !== '' ? {
  //   fontSize: "2.5rem",
  //   border: "none",
  // } : {
  //   fontSize: "2.5rem",
  // };
  // const inputTodayYear = todayYear !== '' ? {
  //   width: "3rem",
  //   border: "none",
  //   marginRight: "1.5rem",
  // } : {
  //   width: "3rem",
  //   marginRight: "1.5rem",
  // }
  const inputTodayMonth = todayMonth !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "1.5rem",
  } : {
    width: "1.5rem",
    marginRight: "1.5rem",
  }
  const inputTodayDate = todayDate !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "1.5rem",
  } : {
    width: "1.5rem",
    marginRight: "1.5rem",
  }
  const inputBirthYear = birthYear !== '' ? {
    width: "3rem",
    border: "none",
    marginRight: "2.5rem",
  } : {
    width: "3rem",
    marginRight: "2.5rem",
  }
  const inputBirthMonth = birthMonth !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "2.5rem",
  } : {
    width: "1.5rem",
    marginRight: "2.5rem",
  }
  const inputBirthDate = birthDate !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "2.5rem",
  } : {
    width: "1.5rem",
    marginRight: "2.5rem",
  }
  const inputAge = age !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "2.5rem",
    marginLeft: "5.5rem",
  } : {
    width: "1.5rem",
    marginRight: "2.5rem",
    marginLeft: "5.5rem",
  }
  const checkbox = {
    width: "2rem",
    height: "1.8rem",
    marginRight: "2.5rem",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, .0)"
  }

  return(
    <>
      <div className="date-locate">
        <FourDigit />
        <TwoDigit />
        <TwoDigit />
      </div>
      <div className="furigana-locate">
        <Furigana />
      </div>
      <div className="name-locate">
        <input
          placeholder='氏名を入力'
          value={name}
          onChange={onChangeName}
          className={name !== '' ? "input-name-border-none" : "input-name"}
        />
      </div>
      <div className="birth-year-locate">
        <FourDigit />
      </div>
      <div className="birth-month-locate">
        <TwoDigit />
      </div>
      <div className="birth-date-locate">
        <TwoDigit />
      </div>
      <div className="age-locate">
        <TwoDigit />
      </div>
      <div className='check-locate'>
        <button style={checkbox} onClick={onClickCheckFirst}>{check === 0 || check === 2 ? "" : "✓"}</button>
        <button style={checkbox} onClick={onClickCheckSecond}>{check === 0 || check === 1 ? "" : "✓"}</button>
      </div>
      {/* checkは一つずつコンポーネントすればチェックマークの表示非表示が楽になるかなぁ */}
    </>
  )
};