import React from 'react';
import ReactDOM from 'react-dom';
import CountButton from './CountButton';

const Prime = () => {
  const third = 'stark';
  return (
    <div>
      <CountButton propPlus={5} />
      <CountButton propPlus={50} />
    </div>
  );
};

export default Prime;
