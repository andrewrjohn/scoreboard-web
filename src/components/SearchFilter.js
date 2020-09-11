import React, { useState, useEffect } from "react";

export default function SearchFilter({ filterScores }) {
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (e) => {
        if (e.code === "KeyF") {
          setShowFilter(true);
        } else if (e.code === "Escape") {
          setShowFilter(false);
        }
      },
      { passive: true }
    );
  }, []);

  return (
    <input
      autoFocus={true}
      className={`text-black absolute inset-x-0 w-full mx-auto ${
        showFilter ? "block" : "hidden"
      } h-12 px-6 bottom-0 shadow-lg`}
      placeholder="Filter by team name"
      onChange={filterScores}
    />
  );
}
