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
    <Card align="items-center">
      <img src={Upload} className="w-[78px] h-[93px]" />
      <h2 className="card-title">강의자료를 업로드해주세요!</h2>
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs"
        onChange={handleChange}
        ref={fileInput}
      />
      <p className="text-center">
        스캔본, 이미지가 아닌 텍스트가 포함된 PDF만 가능합니다.
      </p>
      <button
        className="btn"
        onClick={ctx.onClickNext} // 나중에 파일 업로드하는걸로 수정
        disabled={file === undefined}
      >
        다음으로
      </button>
    </Card>
  );
};

export default FileUpload;
