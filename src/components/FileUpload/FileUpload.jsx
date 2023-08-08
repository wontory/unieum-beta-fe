import { useContext, useState, useRef } from "react";

import StepContext from "../../stores/step-context";

import { betaApi } from "../../apis/betaApi";

import Card from "../UI/Card/Card";

import Upload from "../../assets/images/upload.svg";

const FileUpload = ({ onSavePrompt }) => {
  const ctx = useContext(StepContext);

  const [file, setFile] = useState(undefined);
  const [isWaiting, setIsWaiting] = useState(false);

  const fileInput = useRef(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    console.log(file);
  };

  const handleFileUpload = async () => {
    setIsWaiting(true);

    try {
      const formData = new FormData();
      formData.append("fileList", file);

      const res = await betaApi.post3TestGeneration(formData);
      onSavePrompt([
        res.data.data.v1TestList,
        res.data.data.v2TestList,
        res.data.data.v3TestList,
      ]);

      ctx.onClickNext();
    } catch (err) {
      alert(`문제 생성에 실패했습니다. (${err?.response?.data.message})`);
      setIsWaiting(false);
    }
  };

  return (
    <Card align="items-center" gap="gap-12">
      <h2 className="card-title flex-col text-4xl">
        <img src={Upload} className="w-[78px] h-[93px]" />
        강의자료를 업로드해주세요!
      </h2>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleChange}
        ref={fileInput}
        disabled={isWaiting === true}
      />
      <p className="bg-base-200 rounded-2xl px-24 py-4 text-center">
        스캔본, 이미지가 아닌
        <br />
        <b>텍스트가 포함된 PDF</b>만 가능합니다.
      </p>
      <div className="card-actions items-center flex-col">
        <button
          className="btn btn-primary"
          onClick={handleFileUpload}
          disabled={file === undefined || isWaiting === true}
        >
          {isWaiting ? <i className="spinner icon"></i> : 다음으로}
        </button>
      </div>
    </Card>
  );
};

export default FileUpload;
