import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {} from './moudle'

import './ly-button.scss'

class LyButton extends Component{
  static propTypes = {
    text: PropTypes.string,
    changeTitle: PropTypes.func
  }
  
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { text, click } = this.props
    return(
      <button className="button" onClick={click.bind(this)}>{text}</button>
    )
  }
}

export default LyButton