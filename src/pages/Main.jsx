import Card from "../components/UI/Card/Card";

import Step1 from "../assets/images/step1.svg";
import Step2 from "../assets/images/step2.svg";
import Step3 from "../assets/images/step3.svg";

const stepArr = [
  {
    title: "PDF 강의자료 업로드",
    content: "스캔본, 이미지가 아닌 텍스트가 포함된 PDF만 가능합니다.",
    img: Step1,
  },
  {
    title: "문제 고르기",
    content:
      "3가지 유형 중 시험공부에 가장 도움이 될 것 같은 문제를 골라주세요.",
    img: Step2,
  },
  {
    title: "추첨 기다리기!",
    content: "적어주신 이메일로 당첨 여부를 전달드립니다!",
    img: Step3,
  },
];

const Main = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full prose">
          <div className="badge badge-primary badge-lg">
            강의자료에서 GPT로 기출문제 만들기?
          </div>
          <h1 className="my-3 aggro">유니음 베타 테스트 모집!</h1>
          <div>
            추첨을 통해 5명에게{" "}
            <b className="font-extrabold">허니콤보 기프티콘</b>을 드려요~
          </div>
        </div>
      </div>
      <h2 className="flex justify-center aggro">참여방법</h2>
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full">
          <p>3분이면 끝나요!</p>
          <button className="btn btn-primary">테스트 시작하기</button>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row justify-between">
        {stepArr.map((step, index) => (
          <Card
            className="w-full md:flex-col md:w-100 xl:flex-row"
            align="items-center"
            key={"step" + index}
          >
            <div className="badge badge-secondary badge-lg">
              STEP {index + 1}
            </div>
            <img src={step.img} className="w-[170px] h-[201px]" />
            <h2 className="card-title">{step.title}</h2>
            <p>{step.content}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        * 테스트를 시작하면 경품 지급을 위한 개인정보 수집을 동의한 것으로
        간주합니다.
      </div>
    </div>
  );
};

export default Main;
