import React, { useState } from 'react';

export const InputPhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const onChangePhoneNumber = (event) => setPhoneNumber(event.target.value);

  return (
    <li>
      <input
        value={phoneNumber}
        onChange={onChangePhoneNumber}
        className={phoneNumber !== '' ? "phone-number-border-none" : "phone-number"}
      />
    </li>
  )
}
