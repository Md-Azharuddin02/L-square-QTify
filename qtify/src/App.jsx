import "./App.css";

import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import Section from "./components/Section/Section";
import Carousel from "./components/Carousel/Carousel";
import Tabs from "./components/Tabs/Tabs";

import FAQ from "./components/FAQ/FAQ";
import Player from "./components/Player/Player"

import { topAlbums } from "./data/albums";
import { newAlbums } from "./data/newAlbums";
import { songs } from "./data/songs";

function App() {
  const [currentMusic, setCurrentMusic] = useState(null);

  return (
    <div className="App">
      <Navbar />

      <Hero />

      <Section title="Top Albums">
        <Carousel
          data={topAlbums}
          setCurrentMusic={setCurrentMusic}
        />
      </Section>

      <Section title="New Albums">
        <Carousel
          data={newAlbums}
          setCurrentMusic={setCurrentMusic}
        />
      </Section>

      <Section title="Songs">
        <Tabs />

        <Carousel
          data={songs}
          setCurrentMusic={setCurrentMusic}
        />
      </Section >

      <FAQ />
      <Player currentMusic={currentMusic}/>
    </div>
  );
}

export default App;