import React, { useState } from 'react';

export const InputLicense = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [license, setLicense] = useState('');
  const onChangeYear = (event) => setYear(event.target.value);
  const onChangeMonth = (event) => setMonth(event.target.value);
  const onChangeLicense = (event) => setLicense(event.target.value);

  return (
    <li>
      <input
        value={year}
        onChange={onChangeYear}
        className={year !== '' ? "license-year-border-none" : "license-year"}
      />
      <input 
        value={month}
        onChange={onChangeMonth}
        className={month !== '' ? "license-month-border-none" : "license-month"}
      />
      <input
        value={license}
        onChange={onChangeLicense}
        className={license !== '' ? "license-border-none" : "license"}
      />
    </li>
  )
}