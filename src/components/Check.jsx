import React, { useState } from 'react'

export const Check = () => {
  const [check, setCheck] = useState(false);
  const onClickCheck = () => {setCheck(!check)};

  return (
    <button onClick={onClickCheck} className="checkbox">
      {check ? "✓" : ""}
    </button>
  )
};