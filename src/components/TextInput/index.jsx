import React from 'react';
import { InputWrapper } from './styles';

const TextInput = React.forwardRef((props, ref) => (
  <InputWrapper ref={ref} {...props} type="text" placeholder="Введите слово" />
));

export default TextInput;
