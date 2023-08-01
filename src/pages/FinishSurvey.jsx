import { Link } from "react-router-dom";

const FinishSurvey = () => {
  return (
    <div className="flex flex-col items-center prose">
      <h1>참여해주셔서 감사합니다!</h1>
      <p>
        교수님 강의자료 넣으면 기출문제 만들어주는 유니음 정식 버전이
        궁금하시다면?
      </p>
      <Link className="btn btn-primary" to="https://www.unieum.kr/">
        공식 홈페이지 방문
      </Link>
    </div>
  );
};

export default FinishSurvey;
