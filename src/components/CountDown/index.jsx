import React, { memo, useEffect, useState } from 'react';
import {
  Container, Wrapper, TimesWrap, DicsTimesWrap,
} from './style';

const CountDown = memo(() => {
  const countDownDate = new Date('Jule 21, 2022 16:00:00');
  const now = new Date();
  const distanse = countDownDate - now;
  const SEC_RANGE = 1000;
  const HOUR_AND_MIN_RANGE = 60;
  const DAY_RANGE = 24;

  const days = Math.floor(
    distanse
    / SEC_RANGE
    / HOUR_AND_MIN_RANGE
    / HOUR_AND_MIN_RANGE
    / DAY_RANGE,
  );

  const hours = Math.floor(
    distanse
   / SEC_RANGE
   / HOUR_AND_MIN_RANGE
   / HOUR_AND_MIN_RANGE,
  )
   % DAY_RANGE;

  const minutes = Math.floor(
    distanse
    / SEC_RANGE
    / HOUR_AND_MIN_RANGE,
  )
    % HOUR_AND_MIN_RANGE;

  const seconds = Math.floor(
    distanse
    / SEC_RANGE,
  )
    % HOUR_AND_MIN_RANGE;

  const [currentDays, setCurrentDays] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDays(days);
      setCurrentHours(hours);
      setCurrentMinutes(minutes);
      setCurrentSeconds(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <Container>
      <p style={{ fontSize: '50px', marginBottom: '20px', color: 'darkred' }}>До Конца акции:</p>
      <Wrapper>
        <TimesWrap>
          {currentDays < 10 ? `0${currentDays}` : currentDays}
        </TimesWrap>
        <TimesWrap>
          {currentHours < 10 ? `0${currentHours}` : currentHours}
        </TimesWrap>
        <TimesWrap>
          {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
        </TimesWrap>
        <TimesWrap>
          {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
        </TimesWrap>
      </Wrapper>
      <Wrapper style={{ width: '20%' }}>
        <DicsTimesWrap>DAYS</DicsTimesWrap>
        <DicsTimesWrap>HOURS</DicsTimesWrap>
        <DicsTimesWrap>MINUTES</DicsTimesWrap>
        <DicsTimesWrap>SECONDS</DicsTimesWrap>
      </Wrapper>
    </Container>
  );
});

export default CountDown;
