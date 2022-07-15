import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';
import Slider from '../../components/Slider';
import ProgressBar from '../../components/ProgressBarContainer';
import VertProgressBar from '../../components/VertProgressBar';
import PBWithTimer from '../../components/PBWithTimer';

function mainScreen() {
  return (
    <>
      <Header>
        <HeaderTitle>Header</HeaderTitle>
      </Header>
      <TranslateTest />
      <Slider />
      <ProgressBar />
      <VertProgressBar />
      <PBWithTimer />
    </>
  );
}

export default mainScreen;
