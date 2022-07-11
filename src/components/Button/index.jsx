/* eslint-disable no-console */
import React, { memo, useCallback } from 'react';
import { ButtonWrapper, ButtonText } from './styles';

const Button = memo(({
  text = '', onPress = () => console.log('Please attach method'), disabled = false, primary, outline, bgRed,
}) => {
  const onPressHandle = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <ButtonWrapper
      disabled={disabled}
      onClick={onPressHandle}
      primary={primary}
      outline={outline}
      bgRed={bgRed}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
});
export default Button;
