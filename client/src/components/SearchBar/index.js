import React from 'react';

class SearchBar extends React.Component {
  state = {
    title: ""
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      title: value
    });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <h5>Book search by Title</h5>
          <div className="input-field col s12">
            <input value={this.state.title} onChange={this.handleInputChange} placeholder="Book Title" id="book_title" type="text" className="validate" />
          </div>
          <a href="#!" className="waves-effect waves-teal btn" onClick={() => this.props.search(this.state.title)}>Submit</a>
        </form>
      </div>
    )
  }
}

export default SearchBar;