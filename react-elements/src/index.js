import React from 'react';
import ReactDOM from 'react-dom/client';

const c = console.log.bind(console);

const element = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);

c(element);

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(element);
