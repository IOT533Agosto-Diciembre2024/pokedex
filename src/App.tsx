import React, { useState } from "react";
import "./App.css";
import axios from "axios";
interface Pokemon {
  name: string;
  sprites: { other: { "official-artwork": { front_default: string } } };
  moves: [{ move: { name: string } }];
}

function App() {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>();

  async function search() {
    const response = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    setPokemon(response.data);
  }

  function handleClick(numero: string) {
    setPokemonId(pokemonId + numero);
  }

  function clearPokemonId() {
    setPokemonId("");
  }

  return (
    <div className="App">
      <div className="flex flex-row w-screen h-screen">
        <div className="bg-red-800 w-1/2 h-full flex flex-col items-center justify-center">
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            width={"300px"}
          ></img>
          <p className="text-white text-3xl uppercase ">{pokemon?.name}</p>
          <div className="grid grid-cols-6 text-white">
            {pokemon?.moves.map((item) => {
              return <p>{item.move.name}</p>;
            })}
          </div>
        </div>
        <div className="bg-red-800 w-1/2 h-full flex flex-col items-center justify-center">
          <div
            id="display"
            className="flex bg-green-500 w-3/4 h-20 items-center justify-center"
          >
            <p className="text-3xl">{pokemonId}</p>
          </div>
          <div id="buttons" className="grid grid-cols-3 w-full gap-1 mt-10">
            <button
              className="button"
              onClick={() => {
                handleClick("7");
              }}
            >
              7
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("8");
              }}
            >
              8
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("9");
              }}
            >
              9
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("4");
              }}
            >
              4
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("5");
              }}
            >
              5
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("6");
              }}
            >
              6
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("1");
              }}
            >
              1
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("2");
              }}
            >
              2
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("3");
              }}
            >
              3
            </button>
            <button
              className="button"
              onClick={() => {
                handleClick("0");
              }}
            >
              0
            </button>
          </div>
          <div id="actions" className="flex flex-col w-full space-y-4 mt-10">
            <button
              className="w-full bg-blue-800 h-20 text-white"
              onClick={search}
            >
              Search
            </button>
            <button
              className="w-full bg-blue-800 h-20 text-white"
              onClick={clearPokemonId}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
