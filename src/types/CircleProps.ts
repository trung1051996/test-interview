export interface Circle {
  id: number;
  x: number;
  y: number;
  fading?: boolean;
}

export interface CircleNumberProps {
  id: number;
  x: number;
  y: number;
  fading: boolean | undefined;
  isLose: boolean;
  onCircleClick: (id: number) => void;
  total: number;
  index: number;
  time: number;
}
