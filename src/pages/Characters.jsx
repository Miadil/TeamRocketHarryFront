import { useEffect, useState } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4242/characters/")
      .then((res) => res.json())
      .then((res) => console.log(res) || setCharacters(res));
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Characters;
