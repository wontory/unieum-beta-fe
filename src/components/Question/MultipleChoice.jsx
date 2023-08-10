import { useState, useContext, useEffect } from "react";

import StepContext from "../../stores/step-context";
import AnswerContext from "../../stores/answer-context";

import Card from "../UI/Card/Card";

const MultipleChoice = ({ title, answerKey }) => {
  const { onClickNext } = useContext(StepContext);
  const { answers, onSaveAnswers } = useContext(AnswerContext);

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setOptions([answers["promptV1"], answers["promptV2"], answers["promptV3"]]);
  }, []);

  const handleSubmit = (answer) => {
    onSaveAnswers(answerKey, answer);
    console.log(answers);
    onClickNext();
  };

  return (
    <Card align="items-center" gap="gap-8">
      <h2 className="card-title text-3xl">{title}</h2>
      <fieldset
        className="flex gap-2"
        onChange={(event) => setSelected(event.target.value)}
      >
        {options.map((option, index) => (
          <label
            className="label cursor-pointer flex flex-col items-center gap-2 w-full"
            key={"option" + index}
          >
            <Card className="w-full h-full">
              {option.map((item) => (
                <>
                  Q: {item.question}
                  <br />
                  A: {item.answer}
                  <br />
                </>
              ))}
            </Card>
            <input
              type="radio"
              name="multiplechoice"
              className="radio"
              value={`v${index + 1}`}
            />
          </label>
        ))}
      </fieldset>
      <div className="card-actions justify-end">
        {selected === null ? (
          <button
            className="btn btn-outline btn-primary"
            onClick={() => handleSubmit("none")}
          >
            다 별로에요
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => handleSubmit(selected)}
          >
            다음으로
          </button>
        )}
      </div>
    </Card>
  );
};

export default MultipleChoice;
