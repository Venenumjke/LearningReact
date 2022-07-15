/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import {
  Wrapper, Item, Container, ButtonWrapper, TimerWrapper,
} from './style';
import Button from '../Button';

const fstButtonDuration = 12;
const scndButtonDuration = 5;

const PBWithTimer = memo(() => {
  const [width, setWidth] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [duration, setDuration] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting]);

  const fstButton = useCallback(() => {
    setTimer(timer + fstButtonDuration);
    setIsCounting(true);
    setDuration(duration + fstButtonDuration);
    setWidth(100);
  }, [width]);

  const scndButton = useCallback(() => {
    setTimer(timer + scndButtonDuration);
    setIsCounting(true);
    setDuration(duration + scndButtonDuration);
    setWidth(100);
  }, [width]);

  const resetFunc = useCallback(() => {
    setTimer(0);
    setIsCounting(false);
    setDuration(0);
    setWidth(0);
  }, [width]);

  return (
    <Container>
      <Wrapper>
        <Item
          style={{
            width: `${width}%`,
            transition: `${duration}s`,
          }}
        />
        <TimerWrapper>
          {timer < 10 ? `00:0${timer}` : `00:${timer}`}
        </TimerWrapper>
      </Wrapper>
      <ButtonWrapper>
        <Button
          disabled={isCounting}
          onPress={fstButton}
          text={`00:${fstButtonDuration}`}
          bgRed
        />
        <Button
          disabled={isCounting}
          onPress={scndButton}
          text={`00:0${scndButtonDuration}`}
          bgRed
        />
        <Button
          disabled={!isCounting}
          onPress={resetFunc}
          text="RESET"
          bgRed
        />
      </ButtonWrapper>
    </Container>
  );
});

export default PBWithTimer;
