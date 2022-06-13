import React, { useState } from 'react';
import './App.css';
import NameArea from './components/NameArea';

// const style = {
//   position: "absolute",
//   top: "87.4%",
//   left: "59%",
//   fontSize: "1rem"
// };

// function App(props) {
//   return (
//     <div style={style}>
//       <input type="text" style={{border: "none", width: "10%"}} value={props.value} onChange={handleChange}></input>
//       <button onClick={onClickButton}>OK</button>
//     </div>
//   );
// }
const App = () => {
  const [name, setName] = useState("");
  const [border, setBorder] = useState(false);

  const onChangeName = (event) => setName(event.target.value);
  const onClickInputArea = () => setBorder(!border)

  return (
    <>
      <NameArea
        name={name}
        onChange={onChangeName}
        border={border}
        onClick={onClickInputArea}
      />
    </>
  )
};

export default App;
