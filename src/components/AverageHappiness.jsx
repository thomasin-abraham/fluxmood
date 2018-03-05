import React from 'react'

import api from '../api'

import graph from '../js/AverageHappiness'

//


class AverageHappiness extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      moods: []
    }
  }

  componentWillMount() {
    api.getMoods((err, res) => {
      if (err) return
      this.setState({
        ...this.state,
        moods: res.body
      }, this.attachGraph)
    })  
  }

  attachGraph() {
    graph.attach(this.state.moods)
  }

  render() {
    return (
      <svg></svg>
    )
  }
}

export default AverageHappiness