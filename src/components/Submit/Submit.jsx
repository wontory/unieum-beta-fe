import { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import AnswerContext from "../../stores/answer-context";

import { betaApi } from "../../apis/betaApi";

import Card from "../UI/Card/Card";

const Submit = ({ title, placeholder }) => {
  const navigate = useNavigate();
  const { answers, onSaveAnswers } = useContext(AnswerContext);

  const [email, setEmail] = useState("");

  const handleSubmit = async (answer) => {
    onSaveAnswers("email", answer);

    try {
      const res = await betaApi.postSurvey(answers);
      console.log(res);
      navigate("/done");
    } catch (err) {
      alert(`제출에 실패했습니다. (${err?.response?.data.message})`);
    }
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
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={() => handleSubmit(email)}>
          제출하기
        </button>
      </div>
    </Card>
  );
};

export default Submit;
