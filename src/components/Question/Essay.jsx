import { useContext } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

const Essay = ({ title, placeholder }) => {
  const ctx = useContext(StepContext);

  return (
    <Card align="items-center">
      <h2 className="card-title">{title}</h2>
      <textarea
        className="textarea textarea-bordered w-full"
        placeholder={placeholder}
      ></textarea>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={ctx.onClickNext}>
          다음 질문
        </button>
      </div>
    </Card>
  );
};

export default Essay;
