import React from 'react';
const api = {
  key: "52d4f34a06f5a4f41dbec660a0a2c8db", 
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input
          type='text'
          className='search-bar'
          placeholder= "Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
