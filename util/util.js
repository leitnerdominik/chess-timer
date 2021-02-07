export const timeToString = (miliSec) => {
  const totalSec = miliSec / 1000;
  const hour = Math.floor(totalSec / 3600);
  const min = Math.floor((totalSec % 3600) / 60);
  const sec = Math.ceil((totalSec % 3600) % 60);

  const strHour = ("0" + hour).slice(-2);
  const strMin = ("0" + min).slice(-2);
  const strSec = ("0" + sec).slice(-2);

  if(hour <= 0) {
    return `${strMin}:${strSec}`;
  }

  return `${strHour}:${strMin}:${strSec}`;
};
