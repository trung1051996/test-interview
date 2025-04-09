import { Circle } from "./CircleProps";

export interface GameBoardProps {
  circles: Circle[];
  onCircleClick: (id: number) => void;
}
