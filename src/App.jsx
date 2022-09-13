import React, { useState } from 'react';
import './App.css';
import { NameArea } from './components/NameArea';
import { AddressArea } from './components/AddressArea';
import { Image } from './components/Image';
import { HistoryArea } from './components/HistoryArea';
import { TextArea } from './components/TextArea';
import { MoreInfoArea } from './components/MoreInfoArea';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import PhotoUpload from './components/PhotoUpload';

const App = () => {
  // NameArea
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);
  const onClick = () => {
    const element = document.getElementById('capture');
    const doc = new jsPDF({
      orientation: 'l',
      format: 'a4',
    });
    html2canvas(element, {scale: 2}).then((canvas) => {
      const dataURI = canvas.toDataURL("image/png");
      document.body.appendChild(canvas);
      const width = doc.internal.pageSize.width;
      doc.addImage(dataURI, 'PNG', 0, 0, width, 0);
      doc.save("resume.pdf");
    });
  };

  return (
    <>
      <div id='capture'>
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
        <button onClick={onClick}>PDFとして保存</button>
      </div>
    </>
  )
};

export default App;
