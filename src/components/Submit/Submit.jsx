import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import AnswerContext from "../../stores/answer-context";

import Card from "../UI/Card/Card";

const Submit = ({ title, placeholder }) => {
  const navigate = useNavigate();
  const { onSaveAnswers } = useContext(AnswerContext);

  const [email, setEmail] = useState("");

  const handleSubmit = (answer) => {
    onSaveAnswers("email", answer);
    navigate("/done");
  };

  return (
    <Card align="items-center" gap="gap-32">
      <div className="flex flex-col gap-4 items-center">
        <h2>이제 마지막 질문이에요!</h2>
        <h2 className="card-title text-3xl">{title}</h2>
      </div>
      <input
        type="email"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        value={text}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="card-actions justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            handleSubmit(email);
          }}
        >
          제출하기
        </button>
      </div>
    </Card>
  );
};

export default Submit;
