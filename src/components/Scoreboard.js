import React, { useState } from "react";
import { useScores } from "react-sports-hooks";
import { useLocation } from "react-router-dom";
import MLBScore from "./MLBScore";
import SearchFilter from "./SearchFilter";

export default function Scoreboard() {
  const [filteredScores, setFilteredScores] = useState([]);
  const { pathname } = useLocation();

  const sport = pathname.split("/")[1] || "mlb";

  const { scores } = useScores(sport, { updateIntervalSeconds: 3 });

  const filterScores = ({ target: { value } }) => {
    const filtered = scores.filter(
      (s) =>
        s.teams.homeTeam.displayName
          .toLowerCase()
          .includes(value.toLowerCase()) ||
        s.teams.awayTeam.displayName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredScores(filtered);
  };

  const renderedScores = filteredScores.length > 0 ? filteredScores : scores;

  return (
    <div className="flex w-full flex-wrap py-12 h-screen overflow-x-auto relative items-center">
      {renderedScores.map((s) => (
        <MLBScore key={s.shortName + s.startTime} game={s} />
      ))}
      <SearchFilter filterScores={filterScores} />
    </div>
  );
}
