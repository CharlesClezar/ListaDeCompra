import React, { useState } from 'react';
import "./App.css";

export default function App() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  const adicionarItem = (e) => {
    e.preventDefault();
    if (novoItem.trim() !== '') {
      setLista([...lista, novoItem]);
      setNovoItem('');
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <form className="form-add-item" onSubmit={adicionarItem}>
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input
              type="text"
              className="form-control"
              id="item"
              value={novoItem}
              onChange={(e) => setNovoItem(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}