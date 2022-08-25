import { useState } from 'react';
import './CountButton.module.css';

const CountButton = props => {
  const [currentCount, setCurrentState] = useState(0);

  const handleClick = () => {
    setCurrentState(currentCount + props.propPlus);
  };

  const buttonStyles = {
    background: props.buttonColor,
    borderRadius: '10px',
  };
  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        + {props.propPlus}
      </button>
      <div className="countDisplay">{currentCount}</div>
    </div>
  );
};

export default CountButton;
