import React, { useEffect, useState } from "react";

const CHARACTER = "character";
const EPISODES = "episodes";
const LOCATIONS = "locations";
const PATH = "https://rickandmortyapi.com/api";

const ItemListContainer = ({ children, greeting, name }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${PATH}/${CHARACTER}?page=${currentPage}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const { results } = result;
        setCharacters(results);
      });
  }, [currentPage]);

  const handlePage = () => setCurrentPage(currentPage + 1);

  return (
    <div>
      <h3>{greeting}</h3>
      {children}
      <button onClick={handlePage}>Next</button>
      <ul>
        {characters.map(({ id, name, image }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
