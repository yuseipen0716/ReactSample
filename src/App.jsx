import React, { useState, useRef, useCallback } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input, Space, message } from 'antd';
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
import { db, storage } from './firebase';
import { uploadBytes, ref as storageRef } from 'firebase/storage'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

const App = () => {
  // NameArea
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);

  const formatDatetime = (datetime) => {
    const year = datetime.getFullYear();
    const month = datetime.getMonth() + 1;
    const date = datetime.getDate();
    const hour = datetime.getHours();
    const min = datetime.getMinutes();
    const sec = datetime.getSeconds();

    return `${year}-${month}-${date}-${hour}-${min}-${sec}`
  }

  const ref = useRef(null)

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const onSubmit = useCallback((event) => {
    if (ref.current === null) {
      return
    }
    // cloud firestoreにname, email, timestampを保存する
    setDoc(doc(db, 'users', `${formatDatetime(new Date())}`), {
      name: name,
      email: event['email'],
      createdAt: serverTimestamp()
    }).then(() =>
      setIsLoading(true)
    ).catch((err) =>{
      console.error(err)
      setIsLoading(false);
    });

    const ignoreNode = document.getElementById('ignore-me');
    const ignoreButton = document.getElementById('ignore-button');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1298, 919],
      putOnlyUsedFonts: true,
    });

    // cloud storageにuploadするためのreferenceを作成
    const uploadPdfRef = storageRef(storage, `pdf/resume${formatDatetime(new Date())}.pdf`)

    toPng(ref.current, {
      cacheBust: true,
      filter: (node) => node !== ignoreNode && node !== ignoreButton
      })
      .then((dataUrl) => {
        const width = document.getElementById('capture').clientWidth;
        pdf.addImage(dataUrl, 'PNG', 0, 0, width, 0);
        // firebase storageへuploadするために、blob形式で出力
        const uploadFile = pdf.output('blob');
        uploadBytes(uploadPdfRef, uploadFile)
          .then(() => {
            message.success('登録に成功しました')
            // 利用者の手元にもPDFファイルがダウンロードされる
            pdf.save(`resume-${formatDatetime(new Date())}.pdf`)
            setIsLoading(false);
            setIsModalOpen(false);
          })
          .catch((err) => {
            console.error(err)
            message.error('pdfの保存に失敗しました')
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false);
      })
  }, [ref, name])
  const onSubmitFailed = () => {
    message.error('登録に失敗しました');
  };

  return (
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
      <div className='button-locate'>
        <Button
          type='secondary'
          onClick={showModal}
          id='ignore-button'
        >
          履歴書を保存する
        </Button>
        <Modal
          title='履歴書をPDF形式で保存'
          okText='PDFダウンロード'
          cancelText='キャンセル'
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{style: {display: 'none'}}}
        >
          <p>履歴書をPDF形式でダウンロードするには、メールアドレスの登録が必要です。</p>
          <Form
            form={form}
            layout='vertical'
            onFinish={onSubmit}
            onFinishFailed={onSubmitFailed}
            autoComplete='off'
          >
            <Form.Item
              name='email'
              label='メールアドレス'
              rules={[
                {
                  required: true,
                  type: 'email',
                  min: 6,
                  message: 'メールアドレスとして適切な形式で入力してください'
                }
              ]}
            >
              <Input placeholder='email_address@example.com' />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type='primary' htmlType='submit' disabled={isLoading}>
                  PDFダウンロード
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  )
};

export default App;
