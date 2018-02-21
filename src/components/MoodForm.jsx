import React from 'react'

import styles from '../css/new.css'

import api from '../api'


//


class MoodForm extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      user: props.user,
      mood: undefined,
      formStatus: undefined
    }
  }

  moodClicked(e) {
    this.setState({
      ...this.state,
      mood: e.target.value
    })
  }

  isSelectedMood(moodValue) {
    return moodValue == this.state.mood ? styles.selectedMood : ''
  }

  renderNumber(number) {
    const randomColour = d3.interpolateRainbow(Math.random())
    const value = number + 1

    return (
      <button value={ value } 
        key={ `number-${number}` } 
        style={{ backgroundColor: randomColour }} 
        className={ `${styles.number} ${this.isSelectedMood(value)}` } 
        onClick={(e) => this.moodClicked(e)} 
      >
        { value }
      </button>
    )
  }

  handleSubmit() {
    this.setState({ ...this.state, formStatus: 'pending' })
    api.newMood(this.state.user.id, parseInt(this.state.mood), (err, res) => {
      this.setState({
        ...this.state,
        formStatus: err ? 'error' : 'success'
      })
    })
  }

  renderSubmitButton() {
    if (this.state.mood) return (
      <button type="submit" onClick={this.handleSubmit.bind(this)}
        className={ styles.submitButton }
      >
        Submit
      </button>
    )
  }

  renderFormStatus(message) {
    return (
      <div className={ styles[`${this.state.formStatus}Status`] } >
        { message }
      </div>     
    )
  }

  renderStatus() {
    switch (this.state.formStatus) {
      case 'pending':
        return this.renderFormStatus('...')
      case 'error':
        return this.renderFormStatus('Something went wrong')
      case 'success':
        return this.renderFormStatus('Success!')
      default:
        return this.renderSubmitButton()
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        { Array.from(Array(5).keys()).map(this.renderNumber.bind(this)) }
        { this.renderStatus() }
      </div>
    )
  }
}

export default MoodForm