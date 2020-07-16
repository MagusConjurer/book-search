import React from 'react';
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

class Search extends React.Component {

  render() {
    return (
      <div>
        <SearchBar />
        <CardList />
      </div>
    ) 
  }
}

export default Search;