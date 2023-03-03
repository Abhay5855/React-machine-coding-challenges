// Create a slot maching game where if all emojis match display message - this is matching else this is not matching if emojis don't match.

import React from "react";

const SlotMachine = () => {
  return (
    <div>
      <h1>Slot Machine Game</h1>

      <Slot x="😇" y="😇" z="😇" />
      <Slot x="😆" y="🥪" z="🏁" />
      <Slot x="🌸" y="🌸" z="😇" />
      <Slot x="😇" y="😇" z="😇" />
    </div>
  );
};

const Slot = ({ x, y, z }) => {
  let status = "";

  if (x === y && y === z) {
    status = "This is matching";
  } else {
    status = "This is not matching";
  }

  return (
    <div>
      <div className="slot">
        {x} {y} {z}
      </div>
      <p>{status}</p>
    </div>
  );
};

export default SlotMachine;
