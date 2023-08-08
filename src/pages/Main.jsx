import { useContext, useState } from "react";

import StepContext from "../stores/step-context";

import Landing from "./Landing";
import FileUpload from "../components/FileUpload/FileUpload";
import MultipleChoice from "../components/Question/MultipleChoice";
import Essay from "../components/Question/Essay";
import ShortAnswer from "../components/Question/ShortAnswer";
import Submit from "../components/Submit/Submit";

const surveyQuestion = [
  "Q1. 시험기간에 풀면 가장 도움이 될 것 같은 문제를 골라주세요.",
  "이전과 같이 선택하신 이유가 있다면 적어주세요!",
  "Q2. 교수님 출제 스타일과 가장 비슷한 문제는?",
  "이전과 같이 선택하신 이유가 있다면 적어주세요!",
  "어떤 과목의 자료인가요?",
];

const Main = () => {
  const ctx = useContext(StepContext);
  const [prompt, setPrompt] = useState([]);
  const [answer, setAnswer] = useState({});

  const handleSavePrompt = (generatedPrompts) => {
    setPrompt(generatedPrompts);
    ctx.onClickNext();
  };

  const handleSaveAnswer = (enteredAnswer) => {
    setAnswer((prev) => ({ ...prev, enteredAnswer }));
  };

  const step = [
    <Landing />,
    <FileUpload onSavePrompt={handleSavePrompt} />,
    <MultipleChoice
      title={surveyQuestion[0]}
      options={prompt}
      answerKey="selectedPromptForQ1"
      onSaveAnswer={handleSaveAnswer}
    />,
    <Essay
      title={surveyQuestion[1]}
      answerKey="reasonOfSelectedPromptForQ1"
      placeholder="선택사항"
      minInput={5}
      required={true}
      onSaveAnswer={handleSaveAnswer}
    />,
    <MultipleChoice
      title={surveyQuestion[2]}
      options={prompt}
      answerKey="selectedPromptForQ2"
      onSaveAnswer={handleSaveAnswer}
    />,
    <Essay
      title={surveyQuestion[3]}
      answerKey="reasonOfSelectedPromptForQ1"
      placeholder="선택사항"
      minInput={5}
      required={true}
      onSaveAnswer={handleSaveAnswer}
    />,
    <ShortAnswer
      title={surveyQuestion[4]}
      answerKey="subject"
      placeholder="과목을 입력해주세요."
      minInput={5}
      required={true}
      onSaveAnswer={handleSaveAnswer}
    />,
    <Submit
      title="추첨을 위해 이메일 주소를 적어주세요!"
      placeholder="example@example.com"
      answerData={answer}
    />,
  ];

  return <div className="max-w-[1200px] w-full ">{step[ctx.curStep]}</div>;
};

export default Main;
