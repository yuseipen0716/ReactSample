import React, { useState } from 'react'

export const InputText10lines = () => {
  const [text, setText] = useState('');
  const onChangeText = (event) => setText(event.target.value);

  return (
    <textarea
      cols="85"
      rows="11"
      value={text}
      onChange={onChangeText}
      className={text !== '' ? "text11lines-border-none" : "text11lines"}
    />
  )
};