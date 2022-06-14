import React from 'react'

export const TwoDigit = (props) => {
  const {twoDigit, onChangeTwoDigit} = props;

  const inputTwoDigit = twoDigit !== '' ? {
    width: "1.5rem",
    border: "none",
    marginRight: "1.5rem",
  } : {
    width: "1.5rem",
    marginRight: "1.5rem",
  }

  return (
    <input
      placeholder='xx'
      value={twoDigit}
      onChange={onChangeTwoDigit}
      className={twoDigit !== '' ? "two-digit-border-none" : "two-digit"}
    />
  )
};













// 日付の枠が表示されなくなってしまった件
// CSS移行作業
// リファクタリング