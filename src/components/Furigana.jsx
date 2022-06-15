import React, { useState } from 'react'

export const Furigana = (props) => {
  const [furigana, setFurigana] = useState("");
  const onChangeFurigana = (event) => setFurigana(event.target.value);

  return (
    <input
      placeholder='フリガナを入力'
      value={furigana}
      onChange={onChangeFurigana}
      className={furigana !== '' ? "furigana-border-none" : "furigana"}
    />
  )
};