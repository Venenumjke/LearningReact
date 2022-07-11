/* eslint-disable no-unused-vars */
import React, {
  memo, useCallback, useState, useEffect,
} from 'react';
import { Wrapper, Item, Container } from './style';
import Button from '../Button';

const FULLWIDTH = 100;

const ScndProgressBar = memo(() => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(FULLWIDTH);
  }, []);

  return (
    <Container>
      <h1>load</h1>
      <Wrapper>
        <Item style={{ width: `${width}%` }} />
      </Wrapper>
    </Container>
  );
});

export default ScndProgressBar;
