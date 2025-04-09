import { useEffect, useRef, useState } from "react";

import { Circle } from "../../types/CircleProps.ts";
import getRandomPosition from "../../utils/randomPosition.ts";
import ControlPanel from "./ControlPanel/ControlPanel.tsx";
import GameBoard from "./GameBoard/GameBoard.tsx";
import "./NumberClickGame.styles.css";

export default function NumberClickGame() {
  const [points, setPoints] = useState<number>(5);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(1);
  const [autoPlay, setAutoPlay] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const [result, setResult] = useState<"win" | "lose" | null>(null);

  const initGame = (pts: number) => {
    const newCircles: Circle[] = Array.from({ length: pts }, (_, i) => {
      const { x, y } = getRandomPosition(i, pts);
      return { id: i + 1, x, y };
    });
    setCircles(newCircles);
    setCurrent(1);
    setTime(0);
    setResult(null);
  };

  const startGame = () => {
    if (points < 1 || !Number.isInteger(points)) {
      alert("Points must be a positive integer");
      return;
    }
    setStarted(true);
    setAutoPlay(false);
    initGame(points);
  };

  const handleCircleClick = (id: number) => {
    if (!started) return;
    if (id === current) {
      if (current === points) {
        setResult("win");
        setStarted(false);
      } else {
        setCurrent((c) => c + 1);
      }
      setCircles((prev) => prev.map((circle) => (circle.id === id ? { ...circle, fading: true } : circle)));
      setTimeout(() => {
        setCircles((prev) => prev.filter((c) => c.id !== id));
      }, 3000);
    } else {
      setResult("lose");
      setStarted(false);
      setCircles([]);
    }
  };

  const handleAutoPlay = () => {
    setAutoPlay((prev) => !prev);
  };

  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setTime((prev) => parseFloat((prev + 0.1).toFixed(1)));
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started]);

  useEffect(() => {
    if (!autoPlay || !started) return;
    if (current <= points) {
      const timeout = setTimeout(() => {
        handleCircleClick(current);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [autoPlay, current, started]);

  return (
    <div className="relative">
      <ControlPanel
        points={points}
        setPoints={setPoints}
        time={time}
        started={started}
        autoPlay={autoPlay}
        onStart={startGame}
        onAutoPlayToggle={handleAutoPlay}
      />
      <GameBoard circles={circles} onCircleClick={handleCircleClick} />
      <div className="next">Next: {current}</div>
      {result && (
        <div className={`result-banner ${result === "win" ? "win fireworks" : "lose"}`}>
          {result === "win" ? "🎉 You Win!" : "❌ You Lose!"}
        </div>
      )}
    </div>
  );
}
