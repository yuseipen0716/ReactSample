import React from 'react'
import { InputText11lines } from './InputText10lines';
import { InputText10lines } from './InputText11lines';

export const TextArea = () => {
  return (
    <>
      <div className="text10lines-locate">
        <InputText10lines />
      </div>
      <div className="text11lines-locate">
        <InputText11lines />
      </div>
    </>
  )
};