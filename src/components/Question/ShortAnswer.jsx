import { useContext } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

const ShortAnswer = ({ title, placeholder }) => {
  const ctx = useContext(StepContext);

  return (
    <Card align="items-center">
      <h2 className="card-title">{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={ctx.onClickNext}>
          다음 질문
        </button>
      </div>
    </Card>
  );
};

export default ShortAnswer;
