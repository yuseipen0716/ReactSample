import React, { useState } from 'react'

export const Address = () => {
  const [address, setAddress] = useState("");
  const onChangeAddress = (event) => setAddress(event.target.value);

  return (
    <textarea
      cols="50"
      rows="2"
      value={address}
      onChange={onChangeAddress}
      className={address !== '' ? "address-border-none" : "address"}
    />
  )
};