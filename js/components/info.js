import React from "react";

const Info = () => {
  return (
    <div className="Info">
      <h1>A sealed ecosystem simulation </h1>
      <hr></hr>
      <hr></hr>
      <p>
        Welcome to orb.farm! This is a virtual ecosystem where different species
        of creature can live, grow and die as part of a self-contained food
        chain. Please play, explore, and observe!
      </p>
      <p>
        Created by <a href="https://maxbittker.com">max bittker</a>
      </p>
      <p>
        Source code & Bug reports:{" "}
        <a href="https://github.com/MaxBittker/jar">
          github.com/maxbittker/jar
        </a>
      </p>
      <p>
        See also: <a href="https://sandspiel.club">sandspiel.club</a>
      </p>{" "}
      <hr></hr>
      <hr></hr>
      <div className="species-info">
        <p>
          <h3>Air:</h3> Mostly used to erase things.
        </p>
        <hr></hr>

        <p>
          <h3>Glass:</h3> Lets in light, seals in flavor.
        </p>
        <hr></hr>

        <p>
          <h3>Sand:</h3> Important nutrient vector for plants. Plant seeds in
          this.
        </p>
        <hr></hr>

        <p>
          <h3>Stone:</h3> Draw archways and castle. Aquascaping is a noble
          cause.
        </p>
        <hr></hr>

        <p>
          <h3>Wood:</h3> Driftwood adds natural decorative flare and provides a
          place for fish to hide.
        </p>
        <hr></hr>

        <p>
          <h3>Water:</h3> A classic. Doesn't get better than this.
        </p>
        <hr></hr>

        <p>
          <h3>Algae:</h3> Photosynthesizes sunlight to produce nutrients and
          oxygen. Life of the party!
        </p>
        <hr></hr>

        <p>
          <h3>Daphnia:</h3> Also know as water fleas, these freshwater
          zooplankton are important parts of the ecosystem. They feed on algae
          and lay eggs! More active at night.
        </p>
        <hr></hr>

        <p>
          <h3>Seed:</h3> Grows into eel grass, which is a source of food and
          oxygen. Needs to pull nutrients from sand in order to grow!
        </p>
        <hr></hr>

        <p>
          <h3>Bacteria:</h3> Helps break down waste into fertilizer. Decomposers
          are very important parts to a functioning ecosystem. Blows bubbles
          when happy.
        </p>
        <hr></hr>

        <p>
          <h3>Fish:</h3> They feed mostly on daphnia but will also feed on the
          biofilm that grows on plants. I can't tell what they're thinking.
        </p>
        <hr></hr>

        <p>
          <h3>Gold Fish:</h3> Loyal but simple minded.
        </p>
      </div>
      <hr></hr>
      <p>
        <img src="https://camo.githubusercontent.com/93105325a463894a90f70acf42eb79761f85567e/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64642f466f6f6457656253696d706c652e6a70672f37323170782d466f6f6457656253696d706c652e6a7067" />
        <img src="https://i.pinimg.com/originals/79/94/0d/79940dd994fb3e901af4265493515d00.jpg" />
        <img src=" https://scx1.b-cdn.net/csz/news/800/2017/howmarinealg.jpg" />
      </p>
      <p>
        background shader: forked from{" "}
        <a href="https://www.shadertoy.com/view/tdSXzD">
          "The sun, the sky and the clouds"
        </a>{" "}
        by stilltravelling
      </p>
    </div>
  );
};

export default Info;
