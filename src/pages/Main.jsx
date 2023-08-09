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

  const step = [
    <Landing />,
    <FileUpload />,
    <MultipleChoice
      title={surveyQuestion[0]}
      answerKey="selectedPromptForQ1"
    />,
    <Essay
      title={surveyQuestion[1]}
      answerKey="reasonOfSelectedPromptForQ1"
      placeholder="선택사항"
      minInput={0}
      required={true}
    />,
    <MultipleChoice
      title={surveyQuestion[2]}
      answerKey="selectedPromptForQ2"
    />,
    <Essay
      title={surveyQuestion[3]}
      answerKey="reasonOfSelectedPromptForQ1"
      placeholder="선택사항"
      minInput={0}
      required={true}
    />,
    <ShortAnswer
      title={surveyQuestion[4]}
      answerKey="subject"
      placeholder="과목을 입력해주세요."
      minInput={1}
      required={true}
    />,
    <Submit
      title="추첨을 위해 이메일 주소를 적어주세요!"
      placeholder="example@example.com"
    />,
  ];

  return <div className="max-w-[1200px] w-full ">{step[ctx.curStep]}</div>;
};

export default Main;
