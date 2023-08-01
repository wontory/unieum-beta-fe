import { Link } from "react-router-dom";

import Card from "../UI/Card/Card";

const Submit = ({ title, placeholder }) => {
  return (
    <Card align="items-center">
      <h2>이제 마지막 질문이에요!</h2>
      <h2 className="card-title">{title}</h2>
      <input
        type="email"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
      />
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" to="/done">
          다음으로
        </Link>
      </div>
    </Card>
  );
};

export default Submit;
