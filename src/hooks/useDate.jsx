import { useState, useEffect } from "react";

export const useDate = () => {
  const [date, setTime] = useState(Date.now());

  const timeUpdate = () => {
    setTime(Date.now());
  };

  useEffect(() => {
    const id = setInterval(timeUpdate, 1000);
    return () => clearInterval(id);
  }, [date]);

  return { date };
};
