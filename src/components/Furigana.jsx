import React from 'react'

export const Furigana = (props) => {
  const {furigana, onChangeFurigana} = props;

  const inputFurigana = furigana !== '' ? {
    fontSize: "1rem",
    border: "none",
  } : {
    fontSize: "1rem",
  };

  return (
    <input
      placeholder='フリガナを入力'
      value={furigana}
      onChange={onChangeFurigana}
      style={inputFurigana}
    />
  )
};