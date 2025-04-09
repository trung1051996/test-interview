import { GameBoardProps } from "../../../types/GameBoardProps";

const GameBoard = ({ circles, onCircleClick }: GameBoardProps) => {
  const total = circles.length;
  return (
    <div className="game-board">
      <div className="game-board-box">
        {circles.map((circle, index) => (
          <div
            key={circle.id}
            onClick={() => onCircleClick(circle.id)}
            className={`circle ${circle.fading ? "fade" : ""}`}
            style={{ left: `${circle.x}%`, top: `${circle.y}%`, zIndex: total - index }}
          >
            {circle.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
