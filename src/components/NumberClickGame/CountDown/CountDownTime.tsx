import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { CountDownHandle } from "../../../types/CounDownProps";

const Countdown = forwardRef<CountDownHandle>((_, ref) => {
  const [time, setTime] = useState(3.0);
  const [running, setRunning] = useState(false);

  useImperativeHandle(ref, () => ({
    stop: () => setRunning(false),
    run: () => setRunning(true),
    setTime: () => {
      setTime(3.0);
    },
  }));

  useEffect(() => {
    if (!running || time <= 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        const next = parseFloat((prev - 0.1).toFixed(1));
        return next >= 0 ? next : 0;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [running, time]);

  return <>{`${time.toFixed(1)}s`}</>;
});

export default Countdown;
