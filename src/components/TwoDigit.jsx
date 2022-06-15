import React, { useState } from 'react'

export const TwoDigit = (props) => {
  const [twoDigit, setTwoDigit] = useState("");
  const onChangeTwoDigit = (event) => setTwoDigit(event.target.value);

  return (
    <input
      placeholder='xx'
      value={twoDigit}
      onChange={onChangeTwoDigit}
      className={twoDigit !== '' ? "two-digit-border-none" : "two-digit"}
    />
  )
};