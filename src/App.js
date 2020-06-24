import React, { useState, useEffect } from "react";
import api from './services/api';
import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    })

  }, []);


  async function handleAddRepository() {

    const response = await api.post('/repositories', { title: `Repositorio numero:${Date.now()}`, url: `www.${Date.now()}.com` });
    const repo = response.data;
    setRepositories([...repositories, repo]);

  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);
    const newRespositories = repositories.filter(repository => repository.id !== id); /*Busca todos os repositorios com id diferente do que foi excluido*/
    setRepositories(newRespositories);
  }

  return (
    <div>
      <ul data-testid="repository-list">

        {repositories.map(repo =>
          <li key={repo.id}>{repo.title}

            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>

          </li>)}

      </ul>

      <button type="submit" onClick={handleAddRepository}>Adicionar</button>
    </div>
  );

}

export default App;
