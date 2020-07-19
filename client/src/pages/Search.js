import React from 'react';
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import API from '../utils/API';

class Search extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getSaved()
      .then(res =>
        this.setState({books: res.data})
      )
      .catch(err => console.log(err));
  };

  runSearch = (title) => {
    API.getSearched(title)
      .then(function(res) {
          let newArray = [];
          res.data.items.forEach(book => {
            let newDescription = "No description available"
            if(book.searchInfo) {
              newDescription = book.searchInfo.textSnippet;
            } else {
              newDescription = "No description available"
            }
            let newBook = {
              _id: book.id,
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: newDescription,
              image: book.volumeInfo.imageLinks.smallThumbnail,
              link: book.volumeInfo.previewLink
            }
            newArray.push(newBook);
          });
          this.setState({
            books: newArray
          })
        }.bind(this)
      )
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <SearchBar search={this.runSearch} />
        <CardList books={this.state.books} />
      </div>
    ) 
  }
}

export default Search;