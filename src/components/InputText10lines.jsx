import React, { useState } from 'react'

export const InputText11lines = () => {
  const [text, setText] = useState('');
  const onChangeText = (event) => setText(event.target.value);

  return (
    <textarea
      cols="85"
      rows="12"
      value={text}
      onChange={onChangeText}
      className={text !== '' ? "text10lines-border-none" : "text10lines"}
    />
  )
};