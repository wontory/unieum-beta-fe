import { useState, useContext } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

const MultipleChoice = ({ title, options, answerKey, onSaveAnswer }) => {
  const ctx = useContext(StepContext);

  const [selected, setSelected] = useState(null);

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
              value={index}
            />
          </label>
        ))}
      </fieldset>
      <div className="card-actions justify-end">
        {selected === null ? (
          <button
            className="btn btn-outline btn-primary"
            onClick={ctx.onClickNext}
          >
            다 별로에요
          </button>
        ) : (
          <button className="btn btn-primary" onClick={ctx.onClickNext}>
            다음으로
          </button>
        )}
      </div>
    </Card>
  );
};

export default MultipleChoice;
