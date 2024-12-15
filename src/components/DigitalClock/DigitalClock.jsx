import React from "react";
import "./DigitalClock.scss";

const DigitalClock = ({ time }) => {
  return (
    <div className="digital-clock">
      {time.hours}:{time.minutes}:{time.seconds}
    </div>
  );
};
export default DigitalClock;
