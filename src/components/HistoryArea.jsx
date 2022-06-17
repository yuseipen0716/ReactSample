import React from 'react'
import { InputHistory } from './InputHistory';

export const HistoryArea = () => {
  const firstHistoryArea = [...Array(17)].map(x => "")
  const secondHistoryArea = [...Array(5)].map(x => "")
  const licenseArea = [...Array(9)].map(x => "")

  return (
    <>
      <div className="first-history-locate">
        <ul>
          <InputHistory />
        </ul>
      </div>
    </>
  )
};