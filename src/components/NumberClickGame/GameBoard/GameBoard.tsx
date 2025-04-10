import { GameBoardProps } from "../../../types/GameBoardProps";
import CircleNumber from "../CircleNumber/CircleNumber";

const GameBoard = ({ time, result, circles, onCircleClick }: GameBoardProps) => {
  const isLose = result === "lose";
  const total = circles.length;
  return (
    <div className="game-board">
      <div className="game-board-box">
        {circles.map((circle, index) => (
          <CircleNumber
            key={circle.id}
            id={circle.id}
            x={circle.x}
            y={circle.y}
            fading={circle.fading}
            isLose={isLose}
            onCircleClick={onCircleClick}
            total={total}
            index={index}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
