import React from "react";
import { useState } from "react";
import { BallContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const CreateBall = () => {
  const [ballInputData, setBallInputData] = useState(["", 0, 0, 0, 0]);
  const ballContext = useContext(BallContext);
  const navigate = useNavigate();

  let temp = [];

  // input tag onChange function to display the modified values on screen
  let modify = (event) => {
    temp = [];
    for (let i = 0; i < 5; i++) temp.push(ballInputData[i]);
    temp[event.target.id] = event.target.value;
    setBallInputData(temp);
  };

  // onClick logic for 'Create Ball' button
  let addBall = () => {
    let inputIng = [];
    let minIng = [5, 3, 4, 2]; //Min Value of Ingredients
    for (let i = 1; i < 5; i++) inputIng.push(ballInputData[i]);
    let ballCount = 0;
    let flag = true;
    let i;

    // while loo pto extract the number of balls based on the ingredients value
    while (flag == true) {
      for (i = 0; i < 4; i++) {
        if (inputIng[i] - minIng[i] < 0) {
          flag = false;
          break;
        } else {
          inputIng[i] = inputIng[i] - minIng[i];
        }
      }
      if (i == 4) ballCount++;
    }

    // Creating a new ball Object with name and count
    let ballObject = {
      colour: ballInputData[0],
      count: ballCount,
    };
    flag = true; // flag to determine if new colour is added
    let newArray = ballContext.ballData.map((element) => {
      if (element.colour === ballObject.colour) {
        let val = element.count + ballObject.count;
        flag = false; //colour exists
        return { colour: element.colour, count: val };
      } else {
        return element;
      }
    });

    //If new colour add to new Array
    if (flag == true && ballObject.count > 0) {
      newArray.push(ballObject);
    }

    //update the ballData state
    if (ballContext.ballData.length == 0 && ballObject.count > 0)
      ballContext.setBallData([ballObject]);
    else ballContext.setBallData(newArray);

    navigate("/CreateBalls"); // rerendering the screen
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-start m-10 gap-x-10">
        <div className="bg-green-500 w-1/5 text-center">Colour</div>
        <div className="bg-green-500 w-1/5 text-center">Ingredient1</div>
        <div className="bg-green-500 w-1/5 text-center">Ingredient2</div>
        <div className="bg-green-500 w-1/5 text-center">Ingredient3</div>
        <div className="bg-green-500 w-1/5 text-center">Ingredient4</div>
      </div>
      <div className="flex flex-row m-10 gap-x-10">
        <input
          onChange={modify}
          value={ballInputData[0]}
          id="0"
          type="text"
          className="bg-red-500 w-1/5 text-center"
        ></input>
        <input
          onChange={modify}
          value={ballInputData[1]}
          id="1"
          type="number"
          className="bg-red-500 w-1/5 text-center"
        ></input>
        <input
          onChange={modify}
          value={ballInputData[2]}
          id="2"
          type="number"
          className="bg-red-500 w-1/5 text-center"
        ></input>
        <input
          onChange={modify}
          value={ballInputData[3]}
          id="3"
          type="number"
          className="bg-red-500 w-1/5 text-center"
        ></input>
        <input
          onChange={modify}
          value={ballInputData[4]}
          id="4"
          type="number"
          className="bg-red-500 w-1/5 text-center"
        ></input>
      </div>
      <button
        onClick={addBall}
        className="m-10 p-10 rounded-xl bg-blue-500 active:bg-blue-200 font-bold w-fit self-center"
      >
        Add Ball
      </button>
      <div className="flex flex-col justify-center">
        <div className="self-center text-xl">OUTPUT</div>
        {ballContext.ballData.map((element) => {
          return (
            <div className="flex flex-row self-center gap-x-10">
              <div>{element.colour}</div>
              <div>{element.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateBall;
