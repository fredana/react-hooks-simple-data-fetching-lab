// create your App component here

import React, { useEffect, useState } from "react";


function App() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch random dog image
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDogImage(data.message);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching dog image:", error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div>
        <h1>Random Dog Image</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <img src={dogImage} alt="A Random Dog" />
        )}
      </div>
    );
  }
  
  export default App;
  
