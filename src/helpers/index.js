export const getTime = (date = Date.now(), timezone = 0) => {
  const time = new Date(date);
  time.setUTCHours(time.getUTCHours() + timezone);

  return {
    hours: time.getUTCHours(),
    minutes: time.getUTCMinutes(),
    seconds: time.getUTCSeconds(),
  };
};
