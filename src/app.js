'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Digite o nome do usuário do GitHub' />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/17346799?v=4' />
      <h1>
        <a href='https://github.com/MaximianoEduardo'>Maximiano Eduardo</a>
      </h1>
      <ul className='repos-info'>
        <li> - Repositorios: 18</li>
        <li> - Seguidores: 3</li>
        <li> - Seguindo: 6</li>
      </ul>
      <div className='actions'>
        <button> Ver repositórios </button>
        <button> Ver favoritos </button>
      </div>
      <div>
        <h2> Repositórios</h2>
        <ul className='repos'>
          <li><a href='#'>Nome do Repositorio</a></li>
        </ul>
      </div>
      <div>
        <h2>Favoritos</h2>
        <ul className='starred'>
          <li><a href=''>Nome do Repositorio</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
