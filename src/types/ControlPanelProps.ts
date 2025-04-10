import { RefObject } from "react";

export interface ControlPanelProps {
  result: string | null;
  points: number;
  setPoints: (v: number) => void;
  time: number;
  started: boolean;
  autoPlay: boolean;
  onStart: () => void;
  onAutoPlayToggle: () => void;
  startFirstTimeRef: RefObject<boolean>;
}
