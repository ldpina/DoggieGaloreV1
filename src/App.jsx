import { useState } from 'react';
import './App.css';

function App() {
  const [dogData, setDogData] = useState(null);
  const [breedInfo, setBreedInfo] = useState(null);
  const [bannedList, setBannedList] = useState([]);

  const fetchDog = async () => {
    const res = await fetch('https://api.thedogapi.com/v1/images/search');
    const data = await res.json();
    setDogData(data[0]);
    fetchBreedInfo(data[0].id);
  };

  const fetchBreedInfo = async (id) => {
    const res = await fetch(`https://api.thedogapi.com/v1/images/${id}`);
    const data = await res.json();
    if (data.breeds && data.breeds.length > 0) {
      setBreedInfo(data.breeds[0]);
    } else {
      fetchDog();
    }
  };

  const toggleBannedAttribute = (attribute) => {
    setBannedList((prev) => {
      if (prev.includes(attribute)) {
        return prev.filter((item) => item !== attribute); // Remove attribute
      } else {
        return [...prev, attribute]; // Add attribute
      }
    });
  };

  return (
    <div>
      <div className="whole-page">
        <h1>Doggie Galore</h1>
        <h3>Discover dogs from all over the world!</h3>
        <br />
        <div className="discover-container">
          {dogData && (
            <div className="listing-container">
              {breedInfo && <h2>Breed: {breedInfo.name}</h2>}
              {breedInfo && (
                <div className="buttons">
                  <button className="attribute-buttons" onClick={() => toggleBannedAttribute(breedInfo.breed_group)}>
                    {breedInfo.breed_group}
                  </button>
                  <button className="attribute-buttons" onClick={() => toggleBannedAttribute(breedInfo.life_span)}>
                    {breedInfo.life_span}
                  </button>
                  <button className="attribute-buttons" onClick={() => toggleBannedAttribute(breedInfo.weight.imperial)}>
                    {breedInfo.weight.imperial} lbs
                  </button>
                </div>
              )}
              <br />
              <br />
              <img
                src={dogData.url}
                alt="Dog"
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              />
            </div>
          )}
          <button className="discover-btn" onClick={fetchDog}>🔀 Discover!</button>
        </div>

        <div className="ban-list">
          <h2>Ban List</h2>
          <ul>
            {bannedList.map((attribute, index) => (
              <button className="banned-buttons" key={index} onClick={() => toggleBannedAttribute(attribute)}>{attribute}</button>
            ))}
          </ul>
        </div>

        <div className="history-list">
          <div>
            <h2>Who have we seen before?</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
