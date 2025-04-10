import { Circle } from "./CircleProps";

export interface GameBoardProps {
  time: number;
  result: string | null;
  circles: Circle[];
  onCircleClick: (id: number) => void;
}
