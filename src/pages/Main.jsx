import { useContext } from "react";

import StepContext from "../stores/step-context";

import Landing from "./Landing";
import FileUpload from "../components/FileUpload/FileUpload";
import MultipleChoice from "../components/Question/MultipleChoice";
import Essay from "../components/Question/Essay";

// 문제 설정
const step = [
  <Landing />,
  <FileUpload />,
  <MultipleChoice />,
  <Essay />,
  <MultipleChoice />,
  <Essay />,
];

const Main = () => {
  const ctx = useContext(StepContext);

  return step[ctx.curStep];
};

export default Main;
