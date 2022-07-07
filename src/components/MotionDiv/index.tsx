import React, { memo } from 'react';
import { MotionWrapper } from './styles';

const MotionDiv = memo(({ transform }:MotionProp ) => (
  <MotionWrapper transform= {transform} />
));
export default MotionDiv;

interface MotionProp {
  transform?: any
  children : any
}