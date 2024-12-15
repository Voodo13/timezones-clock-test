import React, { useState, useEffect } from "react";
import "./PointerClock.scss";

const PointerClock = ({ time }) => {
  const hourDeg = (time.hours % 12) * 30 + time.minutes * 0.5;
  const minuteDeg = time.minutes * 6;
  const secondDeg = time.seconds * 6;

  return (
    <div className="pointer-clock">
      <div
        className="pointer-clock__hand"
        style={{
          transform: `rotate(${hourDeg}deg)`,
        }}
      >
        <div className="pointer-clock__hand--hour"></div>
      </div>
      <div
        className="pointer-clock__hand"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      >
        <div className="pointer-clock__hand--minute"></div>
      </div>
      <div
        className="pointer-clock__hand"
        style={{ transform: `rotate(${secondDeg}deg)` }}
      >
        <div className="pointer-clock__hand--second"></div>
      </div>

      <div className="pointer-clock__dot"></div>
    </div>
  );
};

export default PointerClock;
