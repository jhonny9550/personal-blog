import React from "react";
import { MapPin } from "react-feather";
import TextInput from "./components/TextInput";

const App = () => (
  <div className="font-sans">
    <h1>Travelers</h1>
    <h2>Heading Australia 🇦🇺</h2>
    <h3>The beginning:</h3>
    <p>Here is the story about how I came from Colombia to Australia</p>
    <p className="sbody">Shhhh... don't share it yet.</p>
    <TextInput
      id="to"
      label="From"
      placeholder="Enter a name of a city you're traveling to"
      endIcon={<MapPin className="text-yellow" />}
      outlined
    />
  </div>
);

export default App;
