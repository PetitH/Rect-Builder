import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { } from './component'
import { changeTitle } from './module'

class homeView extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._changeTitle = changeTitle.bind(this)
  }
  render() {
    let { Title } = this.props
    return (
      <div>
        <h1>{Title.pageTitle}</h1>
        <Link to="/about">关于</Link>
        <span onClick={this._changeTitle}>改变标题</span>
      </div>
    )
  }
}

export default connect(state => ({
  Title: state.Title
}))( homeView)