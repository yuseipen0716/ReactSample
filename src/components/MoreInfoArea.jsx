import React from 'react';
import { Check } from './Check';
import { TwoDigit } from './TwoDigit';

export const MoreInfoArea = () => {
  return (
    <>
      <div className="hour-locate">
        <TwoDigit />
      </div>
      <div className="minute-locate">
        <TwoDigit />
      </div>
      <div className="family-menber-locate">
        <TwoDigit />
      </div>
      <div className="partner-yes-locate">
        <Check />
      </div>
      <div className="partner-no-locate">
        <Check />
      </div>
      <div className="support-yes-locate">
        <Check />
      </div>
      <div className="support-no-locate">
        <Check />
      </div>
    </>
  )
};