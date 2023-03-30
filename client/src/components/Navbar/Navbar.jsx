import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
  const [temperamento, setTemperamento] = useState('');
  const [origen, setOrigen] = useState('');
  const [ordenAlfabetico, setOrdenAlfabetico] = useState('');
  const [ordenPeso, setOrdenPeso] = useState('');

  const handleTemperamentoChange = (event) => {
    setTemperamento(event.target.value);
  };

  const handleOrigenChange = (event) => {
    setOrigen(event.target.value);
  };

  const handleOrdenAlfabeticoChange = (event) => {
    setOrdenAlfabetico(event.target.value);
  };

  const handleOrdenPesoChange = (event) => {
    setOrdenPeso(event.target.value);
  };

  return (
    <div className='navbar'>
      <div className='searchDiv'>
        <input type='text' placeholder='Buscar' className='searchInput' />
        <button className='searchButton'>Buscar</button>
      </div>
      <div className='containerFilter'>
        <div className='filterDiv'>
          <label className='filterLabel' htmlFor='temperamento'>
            Temperamentos:
          </label>
          <select
            value={temperamento}
            className='filterSelect'
            onChange={handleTemperamentoChange}
            id='temperamento'
          >
            <option value=''>Todos</option>
            <option value='Alegre'>Alegre</option>
            <option value='Tranquilo'>Tranquilo</option>
            <option value='Agresivo'>Agresivo</option>
            <option value='Dominante'>Dominante</option>
          </select>
        </div>
        <div className='filterDiv'>
          <label className='filterLabel' htmlFor='origen'>
            Origen:
          </label>
          <select
            value={origen}
            className='filterSelect'
            onChange={handleOrigenChange}
            id='origen'
          >
            <option value=''>Todos</option>
            <option value='API'>Existentes</option>
            <option value='BDD'>Creados</option>
          </select>
        </div>
        <div className='filterDiv'>
          <label className='filterLabel' htmlFor='ordenAlfabetico'>
            Ordenar por orden alfabético:
          </label>
          <select
            value={ordenAlfabetico}
            className='filterSelect'
            onChange={handleOrdenAlfabeticoChange}
            id='ordenAlfabetico'
          >
            <option value=''>Ninguno</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
          </select>
        </div>
        <div className='filterDiv'>
          <label className='filterLabel' htmlFor='ordenPeso'>
            Ordenar por peso:
          </label>
          <select
            value={ordenPeso}
            className='filterSelect'
            onChange={handleOrdenPesoChange}
            id='ordenPeso'
          >
            <option value=''>Ninguno</option>
            <option value='asc'>Ascendente</option>
            <option value='desc'>Descendente</option>
          </select>
        </div>
      </div>
    </div>
  );
}
