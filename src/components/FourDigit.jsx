import React, { useState } from 'react'

export const FourDigit = () => {
  const [fourDigit, setFourDigit] = useState("");
  const onChangeFourDigit = (event) => setFourDigit(event.target.value);

  return (
    <input
      value={fourDigit}
      onChange={onChangeFourDigit}
      className={(fourDigit !== '' ? "four-digit-border-none" : "four-digit")}
    />
  )
};