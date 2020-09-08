import React from "react";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

export default function Score({ game }) {
  const date = new Date(game.startTime);
  //   const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  //   const month = monthNames[date.getMonth() - 1];
  //   const year = date.getFullYear();
  const hours =
    date.getHours() > 12 ? `${date.getHours() - 12}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const awayScore =
    game.status.state === "pre" ? "" : game.teams.awayTeam.score;
  const homeScore =
    game.status.state === "pre" ? "" : game.teams.homeTeam.score;

  const startDate = `${hours}:${minutes} ${hours > 12 ? " AM" : " PM"}`;

  const topInning = game.status.detail.includes("Top") ? true : false;

  return (
    <div className="flex whitespace-no-wrap flex-no-wrap mb-24 w-1/2 px-20">
      <div className="flex flex-col justify-center px-8">
        <div
          className={`uppercase flex ${
            game.status.state === "in" ? `text-xl` : ""
          } font-semibold`}
        >
          {game.status.state !== "pre" ? (
            topInning ? (
              <ArrowUpIcon className="w-5 mr-1" />
            ) : (
              <ArrowDownIcon className="w-5 mr-1" />
            )
          ) : null}
          {game.status.state === "pre" ? startDate : game.status.inning}
        </div>
        <div className="mt-4 flex items-center font-semibold text-6xl">
          <div className="flex-1 flex">
            {game.teams.awayTeam.shortDisplayName}
          </div>
          <div className="text-6xl ml-12">{awayScore}</div>{" "}
        </div>
        <div className="mb-4 flex items-center font-semibold text-6xl">
          <div className="flex-1">{game.teams.homeTeam.shortDisplayName}</div>
          <div className="text-6xl ml-12">{homeScore}</div>{" "}
        </div>
      </div>
    </div>
  );
}
