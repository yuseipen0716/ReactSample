import React, { useState } from 'react';

export const InputHistory17lines = () => {
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
        className={year !== '' ? "history-17lines-year-border-none" : "history-17lines-year"}
      />
      <input 
        value={month}
        onChange={onChangeMonth}
        className={month !== '' ? "history-17lines-month-border-none" : "history-17lines-month"}
      />
      <input
        value={history}
        onChange={onChangeHistory}
        className={history !== '' ? "history-17lines-border-none" : "history-17lines"}
      />
    </li>
  )
}