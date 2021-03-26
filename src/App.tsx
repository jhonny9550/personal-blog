import React from "react";
import { Airplay, ArrowLeft } from "react-feather";

const App = () => (
  <div className="font-sans">
    <h1>Travelers</h1>
    <h2>Heading Australia 🇦🇺</h2>
    <h3>The beginning:</h3>
    <p>Here is the story about how I came from Colombia to Australia</p>
    <p className="sbody">Shhhh... don't share it yet.</p>
    <button className="btn-blue" disabled>
      Share
    </button>
    <button className="btn-blue btn-fab">
      <Airplay />
    </button>
    <button className="btn-yellow btn-fab-small">
      <ArrowLeft />
    </button>
  </div>
);

export default App;
