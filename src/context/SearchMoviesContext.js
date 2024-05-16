import React from 'react'

const SearchMoviesContext = React.createContext({
  searchResponse: {},
  onTriggerSearchQuery: () => {},
})

export default SearchMoviesContext
