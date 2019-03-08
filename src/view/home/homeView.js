import React, { Component } from 'react'
import { connect } from 'react-redux'

import { LyButton } from '../../component'

import { changeTitle } from './module'

import '../../statics/css/index.css'

class homeView extends Component{
  constructor(props) {
    super(props)
    this._changeTitle = changeTitle.bind(this)
  }
  render() {
    let { pageTitle } = this.props
    return(
      <div className="contain">
        <h1>{pageTitle}</h1>
       <LyButton text="改变标题"></LyButton>
      </div>
    )
  }
}

export default connect(state => ({
  pageTitle: state.pageTitle
}))(homeView)