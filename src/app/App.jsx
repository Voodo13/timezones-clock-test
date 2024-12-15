import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loading, setTimezones } from "../stores/timezonesSlice.js";
import "./App.scss";

import Clocks from "../components/Clocks/Clocks.jsx";
import Loader from "../components/Loader/Loader.jsx";
import { useDate } from "../hooks/useDate.jsx";

const App = ({ clockCount }) => {
  const { date } = useDate();
  const count = clockCount <= 24 ? clockCount : 24;

  const timezones = useSelector((state) => state.timezones.timezones);
  const isLoading = useSelector((state) => state.timezones.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    fetch("timezones.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setTimezones(data));
      })
      .catch((e) => {
        throw new Error("ошибка при загрузке списка часовых зон: " + e);
      });
  }, []);

  const clockWidgets = [];
  for (let i = 0; i < count; i += 1) {
    clockWidgets.push(
      <Clocks
        date={date}
        timezones={timezones}
        key={i + "-clock-widget"}
        onRemoove
      />
    );
  }

  return (
    <div className="app">
      {!isLoading && clockWidgets}
      <Loader show={isLoading} />
    </div>
  );
};

export default App;
