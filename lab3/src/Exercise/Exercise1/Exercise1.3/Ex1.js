// Exercise/Ex0.3/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyButton from './Mycomponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

function render({ second }) {
  root.render(
    <main>
      <MyButton />
      <MyButton text={second.text} disabled={second.disabled} />
    </main>
  );
}


const Ex13 = () => {


    render({
        second: {
          text: "Second Button",
          disabled: true,
        },
      });
    }
  export default Ex13;
