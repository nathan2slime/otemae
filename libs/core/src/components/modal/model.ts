import { MotionProps } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';

export type MaeModalProps = {
  open?: boolean;
  children?: ReactNode;
  width?: number;
  fixed?: boolean;
  height?: number;
  onClose?: () => void;
} & MotionProps &
  HTMLAttributes<HTMLElement>;
