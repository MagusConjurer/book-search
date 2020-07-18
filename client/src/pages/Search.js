import React from 'react';
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import API from '../utils/API';

class Search extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res =>
        this.setState({books: res.data})
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <SearchBar />
        <CardList books={this.state.books} />
      </div>
    ) 
  }
}

export default Search;