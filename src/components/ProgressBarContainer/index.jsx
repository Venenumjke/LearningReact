import React, { memo } from 'react';
import FirstProgressBar from '../FstProgressBar';
import ScndProgressBar from '../ScndProgressBar';
import VertProgressBar from '../VertProgressBar';
import PBWithTimer from '../PBWithTimer';
import { Container } from './style';

const ProgressBar = memo(() => (
  <Container>
    <FirstProgressBar />
    <ScndProgressBar />
    <VertProgressBar />
    <PBWithTimer />
  </Container>

));

export default ProgressBar;
