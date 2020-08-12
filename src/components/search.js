'use strict'

import React, { PropTypes } from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <h1>GitHub App</h1>
    <input
      type='search'
      placeholder='Digite o nome do usuário do GitHub'
      onKeyUp={handleSearch}
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search
