import React from "react";
import { BallContext } from "../App";
import { useContext } from "react";

const Stats = () => {
  const ballContext = useContext(BallContext);

  let totalNumberOfBalls = 0;
  let uniqueNames = [];
  let uniqueColourCount = ballContext.ballData.length;

  let find = () => {
    ballContext.ballData.map((element) => {
      totalNumberOfBalls = totalNumberOfBalls + element.count;
      uniqueNames.push(element.colour);
    });
  };
  find();

  return (
    <div>
      <div className="flex flex-col">
        <div className="self-center text-xl">OUTPUT</div>
        {totalNumberOfBalls == 0 ? (
          <div className="self-center">No Balls added yet.</div>
        ) : (
          <div className="flex flex-col self-center">
            <div className="self-center">
              {"Total Number of Balls : " + totalNumberOfBalls}
            </div>
            <div className="self-center">
              {"Total Number of Unique Colours : " + uniqueColourCount}
            </div>
            <div className="self-center">
              {"The unique colours are : " + uniqueNames}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
