import "./App.css";
import React, { useState } from "react";
import Page1 from "./components/page1";

function App() {
  const [travelData, setTravelData] = useState(null);

  const handlePage1Submit = (data) => {
    setTravelData(data);
  };

  return (
    <div>
      {travelData ? (
        <div>
          <p>Transport: {travelData.transport}</p>
          <p>Distance: {travelData.distance}</p>
        </div>
      ) : (
        <Page1 setTravelData={handlePage1Submit} />
      )}
    </div>
  );
}

export default App;
