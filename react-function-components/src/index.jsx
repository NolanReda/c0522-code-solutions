import React from 'react';
import ReactDOM from 'react-dom';

function button(props) {
  return <div>
           <button>Click here if youre a grubby Fox main</button>
           <div>
              <img src="../../css-responsive-layout/images/fox.png" />
           </div>
         </div>;
}

const container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);

root.render(button());
