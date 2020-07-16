import React from 'react';

function Card() {
  return (
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/200/200/nature/6" alt="lorem"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <span className="card-title">Book Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.</p>
          <a href="/" class="btn waves-effect waves-green teal right bottom"><i class="material-icons">save</i></a>
          </div>
      </div>
    </div>
  )
}

function CardList() {
  return (
    <Card />
  )
}

export default CardList;