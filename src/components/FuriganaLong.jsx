import React, { useState } from 'react'

export const FuriganaLong = () => {
  const [furigana, setFurigana] = useState("");
  const onChangeFurigana = (event) => setFurigana(event.target.value);

  return (
    <input
      value={furigana}
      onChange={onChangeFurigana}
      className={furigana !== '' ? "furigana-long-border-none" : "furigana-long"}
    />
  )
};