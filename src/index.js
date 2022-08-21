import React from 'react';
import ReactDOM from 'react-dom';

const croot = document.getElementById('root');

const Prime = () => {
  const third = 'stark';
  return (
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>{third}</li>
    </ul>
  );
};

ReactDOM.render(<Prime />, croot);
