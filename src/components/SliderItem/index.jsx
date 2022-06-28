/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState } from 'react';
import styles from './styles';

function SliderItem() {
  // const step = 1;
  // eslint-disable-next-line no-unused-vars
  const [slideArray, setSlideArray] = useState([
    { src: require('../../static/img1.jpg'), id: 1 },
    { src: require('../../static/img2.jpg'), id: 2 },
    { src: require('../../static/img3.jpg'), id: 3 },
    { src: require('../../static/img4.jpg'), id: 4 },
    { src: require('../../static/img5.jpg'), id: 5 },
  ]);

  return (
    <div style={styles.container}>
      {slideArray.map((slide) => <img style={styles.imageBox} key={slide.id} src={slide.src} alt="#" />)}
    </div>
  );
}

export default SliderItem;
