import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';

function mainScreen() {
  return (
    <>
      <Header>
        <HeaderTitle>Header</HeaderTitle>
      </Header>
      <TranslateTest />
    </>
  );
}

export default mainScreen;
