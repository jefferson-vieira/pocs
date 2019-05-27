import React, { useState, useEffect } from 'react';

import { asyncUseEffect } from './utils/hooks';

import { getRepositories } from 'services/github';

const { REACT_APP_USER: USER } = process.env;

const App = () => {
  const [repositories, setRepositories] = useState([]);

  asyncUseEffect(async () => {
    const data = await getRepositories(USER);
    setRepositories(data);
  }, []);

  useEffect(() => {
    const favorites = repositories.filter(repository => repository.favorite);

    console.log(`Estrelas: ${favorites.length}`);
  }, [repositories]);

  const handleFavorite = id => {
    const favorites = repositories.map(repository => {
      return repository.id === id
        ? { ...repository, favorite: true }
        : repository;
    });

    setRepositories(favorites);
  };

  return (
    <ul>
      {repositories.map(repository => (
        <li key={repository.id}>
          {repository.favorite && <i className="fas fa-star" />}
          {repository.name}
          <button onClick={() => handleFavorite(repository.id)}>
            Favoritar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default App;
