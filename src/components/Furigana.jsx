import React, { useState } from 'react'

export const Furigana = () => {
  const [furigana, setFurigana] = useState("");
  const onChangeFurigana = (event) => setFurigana(event.target.value);

  return (
    <input
      value={furigana}
      onChange={onChangeFurigana}
      className={furigana !== '' ? "furigana-border-none" : "furigana"}
    />
  )
};