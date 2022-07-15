/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useState } from 'react';
import { Wrapper, Item, Container } from './style';
import Button from '../Button';

const VertProgressBar = memo(() => {
  const [width, setWidth] = useState(0);
  const progress = useCallback(() => {
    setWidth(100);
    if (width === 100) {
      setWidth(0);
    }
  }, [width]);

  return (
    <Container>
      <Wrapper>
        <Item style={{ width: `${width}%` }} />
      </Wrapper>
      <Button onPress={progress} text="PUSH" bgRed />
    </Container>
  );
});

export default VertProgressBar;
