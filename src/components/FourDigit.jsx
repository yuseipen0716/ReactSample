import React from 'react'

export const FourDigit = (props) => {
  const {fourDigit, onChangeFourDigit} = props;

  const inputFourDigit = fourDigit !== '' ? {
    width: "3rem",
    border: "none",
    marginRight: "1.5rem", //コンポーネント化するなら、marginは別で指定したほうがいいかも
  } : {
    width: "3rem",
    marginRight: "1.5rem", //ここも同じく
  }

  return (
    <input
      placeholder='xxxx'
      value={fourDigit}
      onChange={onChangeFourDigit}
      className={(fourDigit !== '' ? "four-digit-border-none" : "four-digit")}
    />
  )
};