import { motion } from 'framer-motion';

import { MaeGhostLoaderProps } from './model';
import { animationGhostLoader } from '../../animations';

import './styles.scss';

export const MaeGhostLoader = (props: MaeGhostLoaderProps) => (
  <motion.div
    className="mae-ghost-loader-container"
    {...props}
    {...animationGhostLoader}
  />
);
