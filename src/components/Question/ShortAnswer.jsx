import { useContext, useState } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

const ShortAnswer = ({ title, placeholder, minInput, required }) => {
  const ctx = useContext(StepContext);

  const [text, setText] = useState("");

  return (
    <Card align="items-center">
      <h2 className="card-title">{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={ctx.onClickNext}
          disabled={required && text.length < minInput}
        >
          다음으로
        </button>
      </div>
    </Card>
  );
};

export default ShortAnswer;
