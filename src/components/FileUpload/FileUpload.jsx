import { useContext, useState, useRef } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

import Upload from "../../assets/images/upload.svg";

const FileUpload = () => {
  const ctx = useContext(StepContext);

  const [file, setFile] = useState(undefined);

  const fileInput = useRef(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Card align="items-center" gap="gap-8">
      <h2 className="card-title flex-col">
        <img src={Upload} className="w-[78px] h-[93px]" />
        강의자료를 업로드해주세요!
      </h2>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleChange}
        ref={fileInput}
      />
      <p className="bg-base-200 rounded-2xl px-16 py-4 text-center">
        스캔본, 이미지가 아닌
        <br />
        <b>텍스트가 포함된 PDF</b>만 가능합니다.
      </p>
      <div className="card-actions items-center flex-col">
        <button
          className="btn"
          onClick={ctx.onClickNext} // 나중에 파일 업로드하는걸로 수정
          disabled={file === undefined}
        >
          다음으로
        </button>
      </div>
    </Card>
  );
};

export default FileUpload;
