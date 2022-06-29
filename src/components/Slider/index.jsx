import React, {
  memo, useCallback, useState, useEffect,
} from 'react';
import Button from '../Button';
import SliderItem from '../SliderItem';
import styles from './styles';

const Slider = memo(() => {
  const [offset, setOffset] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const SLIDE_WIDTH = 600;
  const DURATION = 4000;

  const offsetStyle = {
    display: 'flex',
    transform: `translateX(${offset}px)`,
    transition: '1s',
  };

  const autoMover = useCallback(() => {
    if (offset === -2400) {
      setOffset(0);
    } else {
      setOffset(offset - SLIDE_WIDTH);
    }
  }, [offset]);

  const moveLeftSliderItem = useCallback(() => {
    if (offset === 0) {
      setOffset(-2400);
    } else {
      setOffset(offset + SLIDE_WIDTH);
    }
    setStopTimer(true);
  }, [offset]);

  const moveRightSliderItem = useCallback(() => {
    if (offset === -2400) {
      setOffset(0);
    } else {
      setOffset(offset - SLIDE_WIDTH);
    }
    setStopTimer(true);
  }, [offset]);

  useEffect(() => {
    const autoMoveSlides = setTimeout(autoMover, DURATION);
    if (stopTimer) {
      clearTimeout(autoMoveSlides);
    }
  }, [stopTimer, offset]);

  return (
    <div style={styles.main}>
      <Button onPress={moveLeftSliderItem} text="prev" />
      <div style={styles.container}>
        <div style={offsetStyle}>
          <SliderItem />
        </div>
      </div>
      <Button onPress={moveRightSliderItem} text="next" />
    </div>
  );
});
export default Slider;
