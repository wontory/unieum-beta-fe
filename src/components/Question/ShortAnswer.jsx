import { useContext, useState } from "react";

import StepContext from "../../stores/step-context";
import AnswerContext from "../../stores/answer-context";

import Card from "../UI/Card/Card";

const ShortAnswer = ({ title, placeholder, minInput, required, answerKey }) => {
  const { onClickNext } = useContext(StepContext);
  const { onSaveAnswers } = useContext(AnswerContext);

  const [text, setText] = useState("");

  const handleSubmit = (answer) => {
    onSaveAnswers(answerKey, answer);
    onClickNext();
  };

  return (
    <Card align="items-center" gap="gap-32">
      <h2 className="card-title text-3xl">{title}</h2>
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
          onClick={() => handleSubmit(text)}
          disabled={required && text.length < minInput}
        >
          다음으로
        </button>
      </div>
    </Card>
  );
};

export default ShortAnswer;
