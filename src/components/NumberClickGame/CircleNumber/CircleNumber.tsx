import React, { useEffect, useRef } from "react";

import CountDown from "../CountDown/Countdown";
import { CircleNumberProps } from "../../../types/CircleProps";

const CircleNumber = ({ id, x, y, fading, isLose, onCircleClick, total, index, time }: CircleNumberProps) => {
  const countdownRef = useRef<any | null>(null);

  useEffect(() => {
    if (time == 0) {
      countdownRef?.current?.setTime && countdownRef?.current?.setTime();
      countdownRef?.current?.stop && countdownRef?.current?.stop();
    }
  }, [time]);

  useEffect(() => {
    if (fading) {
      countdownRef?.current?.run && countdownRef?.current?.run();
    }
  }, [fading]);

  useEffect(() => {
    if (isLose) {
      countdownRef?.current?.stop && countdownRef?.current?.stop();
    }
  }, [isLose]);

  return (
    <React.Fragment>
      <div
        onClick={() => onCircleClick(id)}
        className={`circle ${fading ? "fade" : ""} ${isLose ? "pause-anim" : ""}`}
        style={{ left: `${x}%`, top: `${y}%`, zIndex: total - index }}
      >
        <span>{id}</span>
        <span className={`circle-countdown-text ${fading ? "circle-cd" : "circle-cd-hide"}`}>
          <CountDown ref={countdownRef} />
        </span>
      </div>
    </React.Fragment>
  );
};

export default CircleNumber;
