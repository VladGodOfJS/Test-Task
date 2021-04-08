import "./App.scss";
import React from "react";
import { useState } from "react";
import Timer from "./Components/Timer/Timer";
import Btn from "./Components/Btn/Btn";

function App() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [clearInter,setClearInter]=useState();

  const start = () => {
    run();
    setClearInter(setInterval(run, 1000));
  };

  let seconds = time.s,
    minutes = time.m,
    hours = time.h;

  const run = () => {

    if (minutes === 60) {
      hours++;
      minutes = 0;
    }

    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }

    seconds++;
    setTime({ h: hours, m: minutes, s: seconds });
  };

  const stop=()=>{
    clearInterval(clearInter);
  }

  const reset=()=>{
    clearInterval(clearInter);
    setTime({ h: 0, m: 0, s:0}); 
  }

  const wait=()=>{
    clearInterval(clearInter);
  }

  return (
    <div className="main">
      <Timer timer={time} />
      <Btn start={start} stop={stop} reset={reset} wait={wait} />
    </div>
  );
}

export default App;
