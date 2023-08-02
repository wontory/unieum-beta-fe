import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import StepContext from "../../../stores/step-context";

import { CgMenu } from "react-icons/cg";

import { ReactComponent as Icon } from "../../../assets/images/unieum_icon.svg";
import { ReactComponent as Logo } from "../../../assets/images/unieum_logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const ctx = useContext(StepContext);

  const handleClickHome = () => {
    ctx.onClickHome();
    navigate("/");
  };

  return (
    <nav className="navbar max-w-[1200px] w-full">
      <div className="flex-1">
        <button
          className="btn btn-ghost normal-case text-xl"
          onClick={handleClickHome}
        >
          <Icon />
          <Logo width="48" />
          <div className="badge badge-primary">Beta</div>
        </button>
      </div>
      <div className="flex-none gap-2">
        <Link
          className="btn btn-ghost hidden lg:flex"
          to="https://www.unieum.kr/"
        >
          유니음 공식 홈페이지로
        </Link>
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn btn-ghost btn-circle">
            <CgMenu size={24} />
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="https://www.unieum.kr/">유니음 공식 홈페이지로</Link>
            </li>
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
