import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '15px',
  backgroundColor: '#d0f0c0',
  border: '1px solid green',
  padding: '10px',
};

const Element = () => {
  return (
    <div style={divStyle}>
      <div>Green is the prime color of the world</div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

const Ex1 = () => {
  root.render(<Element/>);
};

export default Ex1;