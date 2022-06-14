import React from 'react'

const dateLocate = {
  position: "absolute",
  top: "6.4rem",
  left: "30rem"
}
const furiganaLocate = {
  position: "absolute",
  top: "8.5rem",
  left: "13rem",
}
const nameLocate = {
  position: "absolute",
  top: "12rem",
  left: "12rem",
}
const birthdayLocate = {
  position: "absolute",
  top: "17.2rem",
  left: "9.5rem",
}
const checkLocate ={
  position: "absolute",
  top: "17rem",
  left: "35.6rem",
}

export const NameArea = (props) => {
  const {todayYear, onChangeTodayYear, todayMonth, onChangeTodayMonth, todayDate, onChangeTodayDate, name, onChangeName, furigana, onChangeFurigana,
    birthYear, onChangeBirthYear, birthMonth, onChangeBirthMonth, birthDate, onChangeBirthDate, age, onChangeAge, check, onClickCheckFirst, onClickCheckSecond} = props;
  const inputName = name !== '' ? {
    fontSize: "2.5rem",
    border: "none",
  } : {
    fontSize: "2.5rem",
  };
  const inputFurigana = furigana !== '' ? {
    fontSize: "1rem",
    border: "none",
  } : {
    fontSize: "1rem",
  };
  const inputTodayYear = todayYear !== '' ? {
    width: "3rem",
    border: "none",
    marginRight: "1.5rem",
  } : {
    width: "3rem",
    marginRight: "1.5rem",
  }
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
      <div style={dateLocate}>
        <input
          placeholder='2022'
          value={todayYear}
          onChange={onChangeTodayYear}
          style={inputTodayYear} 
        />
        <input
          placeholder='02'
          value={todayMonth}
          onChange={onChangeTodayMonth}
          style={inputTodayMonth} 
        />
        <input
          placeholder='02'
          value={todayDate}
          onChange={onChangeTodayDate}
          style={inputTodayDate} 
        />
      </div>
      <div style={furiganaLocate}>
      <input
        placeholder='フリガナを入力'
        value={furigana}
        onChange={onChangeFurigana}
        style={inputFurigana}
      />
      </div>
      <div style={nameLocate}>
        <input
          placeholder='氏名を入力'
          value={name}
          onChange={onChangeName}
          style={inputName}
        />
      </div>
      <div style={birthdayLocate}>
        <input
          placeholder='1994'
          value={birthYear}
          onChange={onChangeBirthYear}
          style={inputBirthYear}
        />
        <input
          placeholder='11'
          value={birthMonth}
          onChange={onChangeBirthMonth}
          style={inputBirthMonth}
        />
        <input
          placeholder='22'
          value={birthDate}
          onChange={onChangeBirthDate}
          style={inputBirthDate}
        />
        <input
          placeholder='27'
          value={age}
          onChange={onChangeAge}
          style={inputAge}
        />
      </div>
      <div style={checkLocate}>
        <button style={checkbox} onClick={onClickCheckFirst}>{check === 0 || check === 2 ? "" : "✓"}</button>
        <button style={checkbox} onClick={onClickCheckSecond}>{check === 0 || check === 1 ? "" : "✓"}</button>
      </div>
    </>
  )
};