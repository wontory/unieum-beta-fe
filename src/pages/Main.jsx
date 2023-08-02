import { useContext } from "react";

import StepContext from "../stores/step-context";

import Landing from "./Landing";
import FileUpload from "../components/FileUpload/FileUpload";
import MultipleChoice from "../components/Question/MultipleChoice";
import Essay from "../components/Question/Essay";
import ShortAnswer from "../components/Question/ShortAnswer";
import Submit from "../components/Submit/Submit";

// DUMMY_DATA
const DUMMY_DATA = [
  {
    title: "Q1. 시험기간에 풀면 가장 도움이 될 것 같은 문제를 골라주세요.",
    options: [
      "어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
      "어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? (ㅇ/ X) 어떤 문제인가요? ① 문제 선지 ② 문제 선지 ③ 문제 선지 ④ 문제 선지 어떤 문제인가요? 정답: 어떤 문제입니다.. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
      "어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
    ],
  },
  {
    title: "Q2. 교수님 출제 스타일과 가장 비슷한 문제는?",
    options: [
      "어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
      "어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? (ㅇ/ X) 어떤 문제인가요? ① 문제 선지 ② 문제 선지 ③ 문제 선지 ④ 문제 선지 어떤 문제인가요? 정답: 어떤 문제입니다.. 어떤 문제인가요? 정답: 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
      "어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 이 문제는 이 문제이며, 어떤 문제이며 어떤 문제입니다. 어떤 문제인가요? 정답: 어떤 문제입니다.",
    ],
  },
];

// 문제 설정
const step = [
  <Landing />,
  <FileUpload />,
  <MultipleChoice
    title={DUMMY_DATA[0].title}
    options={DUMMY_DATA[0].options}
  />,
  <Essay
    title="이전과 같이 선택하신 이유가 있다면 적어주세요!"
    placeholder="선택사항"
  />,
  <MultipleChoice
    title={DUMMY_DATA[1].title}
    options={DUMMY_DATA[1].options}
  />,
  <Essay
    title="이전과 같이 선택하신 이유가 있다면 적어주세요!"
    placeholder="선택사항"
  />,
  <ShortAnswer
    title="어떤 과목의 자료인가요?"
    placeholder="과목을 입력해주세요."
  />,
  <Submit
    title="추첨을 위해 이메일 주소를 적어주세요!"
    placeholder="example@example.com"
  />,
];

const Main = () => {
  const ctx = useContext(StepContext);

  return <div className="max-w-[1200px] w-full ">{step[ctx.curStep]}</div>;
};

export default Main;
