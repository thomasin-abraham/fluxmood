import React from 'react'

import { getUsers } from '../api'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentWillMount() {
    getUsers((err, res) => {
      console.log({err, res})
      if (err) return []
      this.setState({
        users: res.body
      })
    })
  }

  render() {
    return (
      <div>
        { this.state.users.map(renderUser) }
      </div>  
    )
  }
}

function renderUser({ name }) {
  return (
    <div>
      { name }
    </div>
  )
}

export default Home