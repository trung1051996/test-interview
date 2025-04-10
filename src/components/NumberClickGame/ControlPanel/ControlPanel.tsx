import { ControlPanelProps } from "../../../types/ControlPanelProps";

const ControlPanel = ({
  result,
  points,
  setPoints,
  time,
  started,
  autoPlay,
  onStart,
  onAutoPlayToggle,
  startFirstTimeRef,
}: ControlPanelProps) => {
  let title = "LET'S PLAY";
  let titleClass = "title";

  switch (result) {
    case "win":
      title = "ALL CLEARED";
      titleClass = "title title-win";
      break;
    case "lose":
      title = "GAME OVER";
      titleClass = "title title-lose";
      break;
  }

  return (
    <div className="container">
      <h1 className={titleClass}>{title}</h1>
      <div className="control-row">
        <label>Points:</label>
        <input
          type="number"
          value={points}
          min="0"
          step="1"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d+$/.test(value)) {
              // Remove warning out range
              setPoints(parseInt(value));
            }
          }}
          className="w-20"
        />
      </div>
      <div className="time">Time: {time.toFixed(1)}s</div>
      <div className="buttons">
        <button onClick={onStart}>{startFirstTimeRef?.current ? "Play" : "Restart"}</button>
        {started && <button onClick={onAutoPlayToggle}>Auto Play {!autoPlay ? "ON" : "OFF"}</button>}
      </div>
    </div>
  );
};

export default ControlPanel;
