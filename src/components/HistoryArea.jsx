import React from 'react'
import { InputHistory } from './InputHistory';

export const HistoryArea = () => {
  const firstHistories = [...Array(17)].map(x => "")
  const secondHistories = [...Array(5)].map(x => "")
  const licenses = [...Array(9)].map(x => "")

  return (
    <>
      <div className="first-history-locate">
        <ul>
          {
            firstHistories.map((history, index) => {
              return (
                <InputHistory key={index} />
              )
            })
          }
        </ul>
      </div>
    </>
  )
};