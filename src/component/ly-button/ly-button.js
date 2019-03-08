import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {} from './moudle'

import './ly-button.scss'

class LyButton extends Component{
  static propTypes = {
		text: PropTypes.string,
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { text } = this.props
    return(
      <button className="button">{text}</button>
    )
  }
}

export default LyButton