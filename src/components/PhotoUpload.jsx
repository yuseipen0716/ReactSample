import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer'

const PhotoUpload = () => {
  const [name, setName] = useState('')
  const [photo, setPhoto] = useState(null);

  const resizeFile = (file) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        125,
        139,
        'png',
        100,
        0,
        (uri) => {
          resolve(uri)
        },
        'base64'
      )
    })
  };

  const onChange = async (event) => {
    try {
      const file = event.target.files[0]
      const image = await resizeFile(file)
      setPhoto(image)
      setName(file.name)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <>
      <input className='photo-upload-locate' id='ignore-me' type="file" onChange={onChange}/>
      {photo && <img src={photo} alt={name} className='photo-locate' />}
    </>
  )
};

export default PhotoUpload;