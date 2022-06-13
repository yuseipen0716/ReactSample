import React from 'react'

const nameLocate = {
  position: "absolute",
  top: "12%",
  left: "9%",
}
const furiganaLocate = {
  position: "absolute",
  top: "8.6%",
  left: "10%",
}

const NameArea = (props) => {
  const {name, onChangeName, furigana, onChangeFurigana} = props;
  const inputName = name != '' ? {
    fontSize: "2rem",
    border: "none",
  } : {
    fontSize: "2rem",
  };
  const inputFurigana = furigana != '' ? {
    fontSize: "1rem",
    border: "none",
  } : {
    fontSize: "1rem",
  };

  return(
    <>
      <div style={furiganaLocate}>
      <input
        placeholder='フリガナを入力'
        value={furigana}
        onChange={onChangeFurigana}
        style={inputFurigana}
      />
      </div>
      <div style={nameLocate}>
        <input
          placeholder='氏名を入力'
          value={name}
          onChange={onChangeName}
          style={inputName}
        />
      </div>
    </>
  )
};

export default NameArea;