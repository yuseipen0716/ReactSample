import React from 'react'

const nameLocate = {
  position: "absolute",
  top: "12%",
  left: "9%",
}

const NameArea = (props) => {
  const {name, onChange} = props;
  const inputName = name != '' ? {
    fontSize: "2em",
    border: "none",
  } : {
    fontSize: "2em",
  };
  return(
    <div style={nameLocate}>
      <input
        placeholder='氏名を入力'
        value={name}
        onChange={onChange}
        style={inputName}
      />
    </div>
  )
};

export default NameArea;