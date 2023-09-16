import { useState, useEffect } from "react";
import style from "./Timer.module.css";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 22,
    minutes: "0" + 8,
    seconds: 37,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const time = { ...prevTime };
        if (time.seconds > 0) {
          time.seconds--;
        } else {
          if (time.minutes === 0 && time.hours === 0 && time.days === 0) {
            clearInterval(interval);
          } else if (time.minutes === 0 && time.hours === 0) {
            time.days--;
            time.hours = 23;
            time.minutes = 59;
            time.seconds = 59;
          } else if (time.minutes === 0) {
            time.hours--;
            time.minutes = 59;
            time.seconds = 59;
          } else {
            time.minutes--;
            time.seconds = 59;
          }
        }
        return time;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // const linearGradient =
    // "linear-gradient(100deg, #C71585, #000000, #551A8B 100%)";





  return (
    <div className={style.container}>
        <p className={style.timer__minutes}>{timeLeft.days}<br/><span>Days</span></p>
        <p className={style.timer__minutes}>{timeLeft.hours}<br/><span>Hours</span></p>
        <p className={style.timer__minutes}>{timeLeft.minutes}<br/><span>Minutes</span></p>
        <p className={style.timer__minutes}>{timeLeft.seconds}<br/><span>Seconds</span></p>  
    </div>
  );
};

export default  Timer;