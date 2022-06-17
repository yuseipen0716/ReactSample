import React, { useState } from 'react';

export const PostalNumber = () => {
  const [postalNumber, setPostalNumber] = useState("");
  const onChangePostalNumber = (event) => setPostalNumber(event.target.value)

  return (
    <input
      value={postalNumber}
      onChange={onChangePostalNumber}
      className={postalNumber !== '' ? "postal-number-border-none" : "postal-number"}
    />
  )
};