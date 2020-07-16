import React from 'react';

function SearchBar() {
  return (
    <div className="row">
      <form className="col s12">
        <h5>Book search by Title</h5>
        <div className="input-field col s12">
          <input placeholder="Book Title" id="book_title" type="text" className="validate" />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;