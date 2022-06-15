import React from 'react'
import '../App.css';
import { FuriganaLong } from './FuriganaLong';
import { PostalNumber } from './PostalNumber';

export const AddressArea = () => {
  return (
    <>
      <div className="furigana-locate-address-area-first">
        <FuriganaLong />
      </div>
      <div className="postal-number-first">
        <PostalNumber />
      </div>
    </>
  )
};