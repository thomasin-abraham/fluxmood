import React from 'react'

import styles from '../css/new.css'

import MoodForm from './MoodForm'

import api from '../api'


//


class New extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      enteredUser: undefined,
      foundUser: undefined,
      randomColor: d3.interpolateRainbow(Math.random())
    }
  }

  componentWillMount() {
    this.getUsers()
  }

  getUsers() {
    api.getUsers((err, res) => {
      if (err) return
      this.setState({
        ...this.state,
        users: res.body
      })
    })    
  }

  updateUser(e) {
    this.setState({
      ...this.state,
      foundUser: undefined,
      enteredUser: e.target.value === '' ? undefined : e.target.value
    })
  }

  userFound(e) {
    const user = this.state.users.find((user) => e.target.name === user.name )
    if (user) {
      this.setState({
        ...this.state,
        enteredUser: user.name,
        foundUser: user
      })
    }
  }

  renderUser({ id, name }) {
    return (
      <button key={ `user-${id}` } name={ name } className={ styles.foundUser } onClick={(e) => this.userFound(e)} >
        { name }
      </button>
    )
  }

  findUsers() {
    if (this.state.foundUser) return []
    return this.state.users.filter((user) => {
      return user.name.includes(this.state.enteredUser)
    })
  }

  findExactMatch() {
    return this.state.users.find((user) => {
      return user.name === this.state.enteredUser
    }) 
  }

  createUser() {
    api.newUser(this.state.enteredUser, (err, res) => {
      if (err) return console.log(err)
      this.getUsers()
    })
  }

  renderCreateUser() {
    if (!this.state.enteredUser) return
    if (!this.findExactMatch()) return (
      <button key="newUser" className={ styles.foundUser } onClick={ this.createUser.bind(this) } >
        Create '{ this.state.enteredUser }'
      </button>
    )
  }

  renderMoodForm() {
    if (this.state.foundUser) {
      return <MoodForm user={this.state.foundUser} />
    }
  }

  render() {
    return (
      <div>
        <div className={ styles.userSelector }
          style={{ backgroundColor: this.state.randomColor }}
        >
          <input autoFocus 
            className={ styles.input } 
            type="text" 
            placeholder="Type ur name" 
            value={ this.state.enteredUser || '' } 
            onChange={(e) => this.updateUser(e)} 
          />
          { [ ...this.findUsers().slice(0, 3).map(this.renderUser.bind(this)), this.renderCreateUser() ] }
        </div>
        { this.renderMoodForm() }
      </div>  
    )
  }
}

export default New