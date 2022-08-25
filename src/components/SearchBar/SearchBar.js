import { useState } from 'react';
import './SearchBar.css';

const vehicles = ['Tank', 'Howitzer', 'HIMARS', 'Bushmaster', 'Mars II'];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    setSearchValue(event.target.value);
    // console.log(searchValue);
  };

  const handleClearClick = () => {
    setSearchValue('');
    console.log(searchValue);
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filteredVehicles = vehicles.filter(vehicle => {
    return vehicle.includes(searchValue);
  });

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      ></input>
      {shouldDisplayButton && <button onClick={handleClearClick}>Wipe</button>}
      <ul>
        {filteredVehicles.map(vehicle => {
          return <li key={vehicle}>{vehicle}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;

/* 

*/
