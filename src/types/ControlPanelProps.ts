export interface ControlPanelProps {
  points: number;
  setPoints: (v: number) => void;
  time: number;
  started: boolean;
  autoPlay: boolean;
  onStart: () => void;
  onAutoPlayToggle: () => void;
}
