import { useContext } from "react";

import StepContext from "../../stores/step-context";

import Card from "../UI/Card/Card";

const MultipleChoice = ({ title, options }) => {
  const ctx = useContext(StepContext);

  return (
    <Card align="items-center">
      <h2 className="card-title">{title}</h2>
      <div className="flex gap-2">
        {options.map((option, index) => (
          <div
            className="flex flex-col items-center gap-2 w-full"
            key={"option" + index}
          >
            <Card className="h-full">{option}</Card>
            <input type="radio" name={"radio-" + index} className="radio" />
          </div>
        ))}
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={ctx.onClickNext}>
          셋 다 별로에요
        </button>
      </div>
    </Card>
  );
};

export default MultipleChoice;
