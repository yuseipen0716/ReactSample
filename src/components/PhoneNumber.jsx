import React from 'react';
import { InputPhoneNumber } from './InputPhoneNumber';

export const PhoneNumber = () => {
  const numbers = ['', '', '', '']

  return (
    <>
      <ul>
        {
          numbers.map((number, index) => {
            return (
              <InputPhoneNumber key={index} />
            )
          })
        }
      </ul>
    </>
  )
};