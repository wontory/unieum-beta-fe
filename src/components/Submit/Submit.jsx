import { Link } from "react-router-dom";

import Card from "../UI/Card/Card";

const Submit = ({ title, placeholder }) => {
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
      />
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" to="/done">
          제출하기
        </Link>
      </div>
    </Card>
  );
};

export default Submit;
