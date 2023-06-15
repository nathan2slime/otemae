import { HTMLAttributes } from 'react';

export type MaeCardProps = {
  title: string;
  cover: string;
  rank: number;
  score: number;
  duration: string;
  year: number;
  onClick?: () => void;
};
