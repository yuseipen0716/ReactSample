import React from 'react'

const NameArea = (props) => {
  return(
    <div>
      { props.border ? (
        <input
        placeholder="氏名を入力"
        value={props.name}
        onChange={props.onChange}
        onClick={props.onClick}
        style={{border: "none"}}
        // やっぱボタン押してborder noneにする方がわかりやすいか
      />
      ) : (
        <input
        placeholder="氏名を入力"
        value={props.name}
        onChange={props.onChange}
        onClick={props.onClick}
      />
      ) }
    </div>
  )
};

export default NameArea;