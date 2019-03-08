import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeTitle } from './module'

require('/src/statics/css/index.css')

class homeView extends Component{
  constructor(props) {
    super(props)
    this._changeTitle = changeTitle.bind(this)
  }
  render() {
    let { pageTitle } = this.props
    return(
      <div class="contain">
        <h1>{pageTitle}</h1>
        <span onClick={this._changeTitle}>改变标题</span>
      </div>
    )
  }
}

export default connect(state => ({
  pageTitle: state.pageTitle
}))(homeView)