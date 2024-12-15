import React from "react";
import * as style from "./Loader.module.scss";

const Loader = ({ show }) => {
  const display = show ? "flex" : "none";
  return (
    <div className={style.loader} style={{ display }}>
      <h2>Загрузка списка часовых зон</h2>
    </div>
  );
};
export default Loader;
