import React, { memo, useCallback } from 'react';
import styles from './style';

// eslint-disable-next-line react/prop-types
const Button = memo(({ text = '', onPress = () => console.log('Please attach method') }) => {
  const onPressHandle = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
  // eslint-disable-next-line react/button-has-type
    <button style={styles.buttonWrapper} onClick={onPressHandle}>
      <p style={styles.buttonText}>{text}</p>
    </button>
  );
});
export default Button;
