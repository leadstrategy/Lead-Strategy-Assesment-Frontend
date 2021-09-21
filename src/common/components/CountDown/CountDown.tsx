import React from 'react';

interface CountDownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  callBack: () => any;
}

const CountDownTimer = ({ hours, minutes, seconds, callBack }: CountDownTimerProps) => {
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) callBack();
    else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <>{`${hrs.toString().padStart(2, '0')}h :${mins.toString().padStart(2, '0')}m :${secs.toString().padStart(2, '0')}s`}</>;
};

export default CountDownTimer;
