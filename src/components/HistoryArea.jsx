import React from 'react'
import { InputHistory17lines } from './InputHistory17lines';
import { InputHistory5lines } from './InputHistory5lines';
import { InputLicense } from './InputLicense';

export const HistoryArea = () => {
  const firstHistories = [...Array(17)].map(x => "")
  const secondHistories = [...Array(5)].map(x => "")
  const licenses = [...Array(9)].map(x => "")

  return (
    <>
      <div className="history-17lines-locate">
        <ul>
          {
            firstHistories.map((history, index) => {
              return (
                <InputHistory17lines key={index} />
              )
            })
          }
        </ul>
      </div>
      <div className="history-5lines-locate">
        <ul>
          {
            secondHistories.map((history, index) => {
              return (
                <InputHistory5lines key={index} />
              )
            })
          }
        </ul>
      </div>
      <div className="license-locate">
        <ul>
          {
            licenses.map((license, index) => {
              return (
                <InputLicense key={index} />
              )
            })
          }
        </ul>
      </div>
    </>
  )
};