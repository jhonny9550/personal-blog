import React from "react";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";

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
    <button className="btn-blue-outlined" disabled>
      Share
    </button>
    <button className="btn-yellow">Share</button>
    <button className="btn-yellow-outlined">Share</button>
    <button className="btn-yellow-outlined btn-small">Share</button>
    <button className="btn-black btn-large">Share</button>
    <button className="btn-default btn-large">Share</button>
    <button className="btn-default-outlined btn-large">Share</button>
    <button className="btn-blue btn-fab-small" disabled>
      <SearchIcon />
    </button>
    <button className="btn-yellow btn-fab" disabled>
      <SearchIcon />
    </button>
  </div>
);

export default App;
