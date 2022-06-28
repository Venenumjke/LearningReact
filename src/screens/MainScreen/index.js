import React from 'react';
import Slider from '../../components/Slider';
import TranslateTest from '../../components/TranslateTest';

import styles from './styles';

function mainScreen() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div style={styles.contentWrapper}>
      <header style={styles.header}>
        <h4 style={styles.titleText}>Header</h4>
      </header>
      <TranslateTest />
      <Slider />
    </div>
  );
}

export default mainScreen;
