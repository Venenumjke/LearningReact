import React, { memo } from 'react';
import FirstProgressBar from '../FstProgressBar';
import ScndProgressBar from '../ScndProgressBar';
import { Container } from './style';

const ProgressBar = memo(() => (
  <Container>
    <FirstProgressBar />
    <ScndProgressBar />
  </Container>

));

export default ProgressBar;
