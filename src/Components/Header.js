import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-row justify-start gap-x-10 bg-blue-500 sticky top-0">
      <Link to="/CreateBalls">
        <button className="bg-blue-500 p-5 text-black font-bold hover:text-white">
          Create Ball
        </button>
      </Link>
      <Link to="/Stats">
        <button className="bg-blue-500 p-5  text-black font-bold hover:text-white">
          Statistics
        </button>
      </Link>
      <Link to="/Sort">
        <button className="bg-blue-500 p-5  text-black font-bold hover:text-white">
          Sort
        </button>
      </Link>
    </div>
  );
};

export default Header;
