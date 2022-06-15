import React from 'react'
import { Furigana } from './Furigana'
import { FourDigit } from './FourDigit'
import { TwoDigit } from './TwoDigit'
import '../App.css';

export const NameArea = (props) => {
  const {name, onChangeName, check, onClickCheckFirst, onClickCheckSecond} = props;

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
    </>
  )
};