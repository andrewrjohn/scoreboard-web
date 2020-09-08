import React from "react";
import "./styles/main.css";
import MLBScore from "./components/MLBScore";
import { useScores } from "react-sports-hooks";

function App() {
  const { scores } = useScores("mlb");

  return (
    <div className="h-screen w-full bg-black text-white flex">
      <div className="w-32 px-6 border-r border-white flex flex-col items-center justify-center">
        <div className="my-4 cursor-pointer">MLB</div>
        <div className="my-4 cursor-pointer">NFL</div>
        <div className="my-4 cursor-pointer">NBA</div>
      </div>
      <div className="flex w-full flex-wrap py-12 h-screen overflow-x-auto">
        {scores.map((s) => (
          <MLBScore key={s.shortName + s.startTime} game={s} />
        ))}
      </div>
    </div>
  );
}

export default App;
