import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordian from './accordian';

const element = <Accordian />;
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
