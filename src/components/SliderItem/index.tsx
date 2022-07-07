/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { SliderImg } from './styles';

function SliderItem({ src }: SliderItemProp) {
  return (
    <SliderImg src={src} alt="#" />
  );
}

export default SliderItem;

interface SliderItemProp {
  src: string
}