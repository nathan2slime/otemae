import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent } from 'react';

import { animationModal } from '../../animations';

import { MaeModalProps } from './model';

import './styles.scss';

export const MaeModal = (props: MaeModalProps) => {
  const { open, children, fixed, onClose, className } = props;

  const toggle = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
    !fixed && e.target === e.currentTarget && onClose && onClose();

  return (
    <AnimatePresence mode="sync">
      {open && (
        <div
          {...props}
          className={classNames({ 'mae-modal-container': true, [className || '']: true })}
          onClick={toggle}
          {...animationModal.overlay}
        >
          <motion.div {...animationModal.content}>{children}</motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
