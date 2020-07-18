import React from 'react';

function Card(props) {
  return (
    <div className="card horizontal">
      <div className="card-image">
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">{props.title}</span>
          <p>Author: {props.author}</p>
          <br />
          <p>{props.description}</p>
          <br />
          <a href={props.link}>Go to book</a>
          <a href="/" className="btn waves-effect waves-green teal right bottom"><i className="material-icons">save</i></a>
          </div>
      </div>
    </div>
  )
}

function CardList(props) {
  return (
    <div className="cardGroup">
      {props.books.map(book => <Card
        key={book._id.toString()}
        title={book.title}
        author={book.authors}
        description={book.description}
        image={book.image}
        link={book.link}
      />)}
    </div>
  )
}

export default CardList;