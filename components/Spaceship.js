import React from 'react'

let Spaceship = class Spaceship extends React.Component{
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>speed: {this.props.speed}</p>
        <p>hasRockets: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
