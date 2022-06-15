import React, { useState } from 'react';

export const PhoneNumber = () => {
  const [phoneNumber1, setPhoneNumber1] = useState('');
  const onChangePhoneNumber1 = (event) => setPhoneNumber1(event.target.value);
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const onChangePhoneNumber2 = (event) => setPhoneNumber2(event.target.value);
  const [phoneNumber3, setPhoneNumber3] = useState('');
  const onChangePhoneNumber3 = (event) => setPhoneNumber3(event.target.value);
  const [phoneNumber4, setPhoneNumber4] = useState('');
  const onChangePhoneNumber4 = (event) => setPhoneNumber4(event.target.value);

  return (
    <>
      <ul>
        <li>
          <input
            value={phoneNumber1}
            onChange={onChangePhoneNumber1}
            className={phoneNumber1 !== '' ? "phone-number-border-none" : "phone-number"}
          />
        </li>
        <li>
          <input
            value={phoneNumber2}
            onChange={onChangePhoneNumber2}
            className={phoneNumber2 !== '' ? "phone-number-border-none" : "phone-number"}
          />
        </li>
        <li>
          <input
            value={phoneNumber3}
            onChange={onChangePhoneNumber3}
            className={phoneNumber3 !== '' ? "phone-number-border-none" : "phone-number"}
          />
        </li>
        <li>
          <input
            value={phoneNumber4}
            onChange={onChangePhoneNumber4}
            className={phoneNumber4 !== '' ? "phone-number-border-none" : "phone-number"}
          />
        </li>
      </ul>
    </>
  )
};

// TODO liの各要素をコンポーネントに切り分け、mapで表示するようにしたい。