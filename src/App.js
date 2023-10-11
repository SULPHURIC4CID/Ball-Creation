import React from "react";
import Stats from "./Pages/Stats";
import CreateBall from "./Pages/CreateBall";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { createContext } from "react";
import { useState } from "react";
import Sort from "./Pages/Sort";

export const BallContext = createContext(null);

const App = () => {
  const [ballData, setBallData] = useState([]);

  let value = { ballData, setBallData };

  return (
    <div>
      <Header />
      <BallContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CreateBalls" element={<CreateBall />}></Route>
          <Route path="/Stats" element={<Stats />}></Route>
          <Route path="/Sort" element={<Sort />}></Route>
        </Routes>
      </BallContext.Provider>
    </div>
  );
};

export default App;
