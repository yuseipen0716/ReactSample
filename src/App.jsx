import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { AddressArea } from './components/AddressArea';
import { Image } from './components/Image';
import { HistoryArea } from './components/HistoryArea';
import { TextArea } from './components/TextArea';
import { MoreInfoArea } from './components/MoreInfoArea';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';
import PhotoUpload from './components/PhotoUpload';

const App = () => {
  // NameArea
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);
  const ref = useRef(null)
  const onClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    const ignoreNode = document.getElementById('ignore-me')
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1298, 919],
      putOnlyUsedFonts: true,
    });

    toPng(ref.current, {
      cacheBust: true,
      filter: (node) => node !== ignoreNode,
      })
      .then((dataUrl) => {
        const width = document.getElementById('capture').clientWidth
        pdf.addImage(dataUrl, 'PNG', 0, 0, width, 0);
        pdf.save('resume.pdf');
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <>
      <div ref={ref} id='capture'>
        <Image />
        <NameArea
          name={name}
          onChangeName={onChangeName}
        />
        <PhotoUpload />
        <AddressArea />
        <HistoryArea />
        <TextArea />
        <MoreInfoArea />
      </div>
      <div>
        {/* 一旦pdf保存ボタン仮置き */}
        <button onClick={onClick}>保存</button>
      </div>
    </>
  )
};

export default App;
