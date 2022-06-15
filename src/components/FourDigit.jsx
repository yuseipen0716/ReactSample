import React, { useState } from 'react'

export const FourDigit = () => {
  // const {fourDigit, onChangeFourDigit} = props;
  const [fourDigit, setFourDigit] = useState("");
  const onChangeFourDigit = (event) => setFourDigit(event.target.value);

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