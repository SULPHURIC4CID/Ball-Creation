import React from "react";
import { BallContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sort = () => {
  const ballContext = useContext(BallContext);
  const navigate = useNavigate();

  const [sortStyle, setSortStyle] = useState("Sorted by Insertion Order");
  let tempBallData = ballContext.ballData;
  let customSort = (event) => {
    if (event.target.id == "1") {
      tempBallData.sort(function (a, b) {
        setSortStyle("Sorted by Colour");
        return a.colour.localeCompare(b.colour);
      });
    } else {
      tempBallData.sort(function (a, b) {
        setSortStyle("Sorted by Count");
        return a.count - b.count;
      });
    }
    navigate("/Sort");
  };
  return (
    <div>
      <br></br>
      <div className="flex flex-row justify-start gap-x-10">
        <button
          id="1"
          onClick={customSort}
          className="bg-blue-500 p-5  text-black font-bold"
        >
          Colour Sort
        </button>
        <button
          id="2"
          onClick={customSort}
          className="bg-blue-500 p-5  text-black font-bold"
        >
          Count Sort
        </button>
      </div>
      <div className="flex flex-col">
        <div className="self-center text-2xl">OUTPUT</div>
        <div className="self-center text-xl">{sortStyle}</div>
        {tempBallData.map((element) => {
          return (
            <div className="flex flex-row justify-center">
              <div>{element.colour}</div>
              <div>{element.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
