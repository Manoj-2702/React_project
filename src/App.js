import "./App.css";
import React, { useState } from "react";
import Page1 from "./components/page1";
import Page2 from "./pages/page2";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route exact path="/mode-choice" element={<Page2 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
