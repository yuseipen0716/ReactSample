import React from 'react'
import { Furigana } from './Furigana'
import { FourDigit } from './FourDigit'
import { TwoDigit } from './TwoDigit'
import { Check } from './Check'
import '../App.css';

export const NameArea = (props) => {
  const {name, onChangeName} = props;

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
      <div className='check-locate-name-area-male'>
        <Check />
      </div>
      <div className="check-locate-name-area-female">
        <Check />
      </div>
    </>
  )
};