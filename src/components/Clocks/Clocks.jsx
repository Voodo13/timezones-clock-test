import React, { useState, useEffect } from "react";
import PointerClock from "../PointerClock/PointerClock.jsx";
import DigitalClock from "../DigitalClock/DigitalClock.jsx";
import * as styles from "./Clocks.module.scss";

import { getTime } from "../../helpers/index.js";

const Clocks = ({ date, timezones }) => {
  const [timezone, setTimezone] = useState(+timezones[0].timezone);
  const time = getTime(date, timezone);

  const getTimezoneOptions = () =>
    timezones.map((item, i) => (
      <option value={item.timezone} defaultValue={i === 0} key={item.name}>
        {item.name}
      </option>
    ));

  const timeZoneHandler = (e) => {
    setTimezone(+e.target.value);
  };

  return (
    <div className={styles.clocks}>
      <PointerClock time={time} />
      <DigitalClock time={time} />

      {!!timezones.length && (
        <select name="timezones" onChange={timeZoneHandler}>
          {getTimezoneOptions()}
        </select>
      )}
    </div>
  );
};
export default Clocks;
