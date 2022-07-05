/* eslint-disable global-require */
import React, {
  memo, useCallback, useState, useEffect,
} from 'react';
import Button from '../Button';
import SliderItem from '../SliderItem';
import MotionDiv from '../MotionDiv';
import { Main, Container } from './styles';

const Slider = memo(() => {
  const [stopTimer, setStopTimer] = useState(false);
  const SLIDE_WIDTH = 600;
  const DURATION = 2000;
  const [step, setStep] = useState(0);
  const STOP_DURATION = 7000;

  const slideArray = [
    { src: require('../../static/img1.jpg'), id: 1 },
    { src: require('../../static/img2.jpg'), id: 2 },
    { src: require('../../static/img3.jpg'), id: 3 },
    { src: require('../../static/img4.jpg'), id: 4 },
    { src: require('../../static/img5.jpg'), id: 5 },
  ];

  const MAX_STEP = slideArray.length - 1;
  const MIN_STEP = 0;

  const autoMover = useCallback(() => {
    if (step <= (-MAX_STEP)) {
      setStep(MIN_STEP);
    } else {
      setStep(step - 1);
    }
  }, [step]);

  const moveLeftSliderItem = useCallback(() => {
    if (step >= MIN_STEP) {
      setStep(-MAX_STEP);
    } else {
      setStep(step + 1);
    }
    setStopTimer(true);
  }, [step]);

  const moveRightSliderItem = useCallback(() => {
    if (step <= (-MAX_STEP)) {
      setStep(MIN_STEP);
    } else {
      setStep(step - 1);
    }
    setStopTimer(true);
  }, [step]);

  useEffect(() => {
    const autoMoveSlides = setTimeout(autoMover, DURATION);
    if (stopTimer) {
      clearTimeout(autoMoveSlides);
    }
  }, [step, stopTimer]);

  useEffect(() => {
    if (stopTimer) {
      setTimeout(() => {
        setStopTimer(false);
      }, STOP_DURATION);
    }
  }, [stopTimer]);

  return (
    <Main>
      <Button outline onPress={moveLeftSliderItem} text="<" />
      <Container>
        <MotionDiv transform={step * SLIDE_WIDTH}>
          {slideArray.map((slide) => <SliderItem key={slide.id} src={slide.src} />)}
        </MotionDiv>
      </Container>
      <Button outline onPress={moveRightSliderItem} text=">" />
    </Main>
  );
});
export default Slider;
