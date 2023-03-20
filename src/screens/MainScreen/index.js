import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';
import Slider from '../../components/Slider';
import ProgressBar from '../../components/ProgressBarContainer';
import CountDown from '../../components/CountDown';

function mainScreen() {
  return (
    <>
      <Header>
        <HeaderTitle>Header</HeaderTitle>
      </Header>
      <TranslateTest />
      <Slider />
      <ProgressBar />
      <CountDown />
    </>
  );
}

export default mainScreen;
