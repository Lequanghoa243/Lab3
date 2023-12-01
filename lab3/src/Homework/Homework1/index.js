import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrumKit from './DrumKit';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Ex1 = () => {
  root.render(
    <React.StrictMode>
      <DrumKit />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
};

export default Ex1;