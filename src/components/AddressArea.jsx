import React from 'react'
import '../App.css';
import { Address } from './Address';
import { FuriganaLong } from './FuriganaLong';
import { PostalNumber } from './PostalNumber';

export const AddressArea = () => {
  return (
    <>
      <div className="furigana-locate-address-area-first">
        <FuriganaLong />
      </div>
      <div className="postal-number-locate-first">
        <PostalNumber />
      </div>
      <div className="address-locate-first">
        <Address />
      </div>
      <div className="furigana-locate-address-area-second">
        <FuriganaLong />
      </div>
      <div className="postal-number-locate-second">
        <PostalNumber />
      </div>
      <div className="address-locate-second">
        <Address />
      </div>
    </>
  )
};