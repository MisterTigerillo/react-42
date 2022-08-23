import React, { useState } from 'react';

const CountButton = props => {
  const [currentCount, setCurrentState] = useState(0);
  //   let currentCount = 0;

  //   console.log(props.propPlus);

  const handleClick = () => {
    setCurrentState(currentCount + props.propPlus);
  };

  const divStyle = {
    color: 'red',
    border: '1px solid black',
    borderRadius: '10px',
  };
  return (
    <div style={divStyle}>
      <button onClick={handleClick}>+ {props.propPlus}</button>
      <div>{currentCount}</div>
    </div>
  );
};

export default CountButton;
