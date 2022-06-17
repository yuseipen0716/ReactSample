import React, { useState } from 'react';

export const InputHistory = () => {
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
        className={year !== '' ? "history-year-border-none" : "history-year"}
      />
      <input 
        value={month}
        onChange={onChangeMonth}
        className={month !== '' ? "history-month-border-none" : "history-month"}
      />
      <input
        value={history}
        onChange={onChangeHistory}
        className={history !== '' ? "history-border-none" : "history"}
      />
    </li>
  )
}