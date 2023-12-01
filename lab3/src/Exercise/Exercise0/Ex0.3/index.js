// Exercise/Ex0.3/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import MySection from './Mysection';
import MyButton from './Mybutton';


const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => (
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);

export default App;
