import React from 'react';
import styles from './styles';

const TextInput = React.forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <input style={styles.myInput} ref={ref} {...props} type="text" placeholder="Введите слово" />
));

export default TextInput;
