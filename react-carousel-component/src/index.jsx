import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    imgUrl: '../img/bane.jpg',
    alt: 'bane'
  },
  {
    imgUrl: '../img/naga-sadow.jpg',
    alt: 'naga-sadow'
  },
  {
    imgUrl: '../img/nihilus.jpeg',
    alt: 'nihilus'
  },
  {
    imgUrl: '../img/revan.jpg',
    alt: 'revan'
  }
];

const element = (
  <Carousel images={images} />
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
