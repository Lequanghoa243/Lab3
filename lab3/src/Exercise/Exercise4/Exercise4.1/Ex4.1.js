import React from 'react';
import ReactDOM from 'react-dom';
import './Ex4.css';

const Element = () => {
  return (
    <div className="divStyle">
      <div>Green is the prime color of the world</div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));


const Ex1 = () => {



    root.render(<Element/>);

};

export default Ex1;