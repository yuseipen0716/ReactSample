import React, { useState } from 'react';

export const InputHistory5lines = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [history, setHistory] = useState('');
  const onChangeYear = (event) => setYear(event.target.value);
  const onChangeMonth = (event) => setMonth(event.target.value);
  const onChangeHistory = (event) => setHistory(event.target.value);

  return (
    <li>
      <input
        value={year}
        onChange={onChangeYear}
        className={year !== '' ? "history-5lines-year-border-none" : "history-5lines-year"}
      />
      <input 
        value={month}
        onChange={onChangeMonth}
        className={month !== '' ? "history-5lines-month-border-none" : "history-5lines-month"}
      />
      <input
        value={history}
        onChange={onChangeHistory}
        className={history !== '' ? "history-5lines-border-none" : "history-5lines"}
      />
    </li>
  )
}