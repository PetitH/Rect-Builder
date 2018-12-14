import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { } from './component'
import { } from './module'

class aboutView extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div>
        <p>暂时没有新的内容</p>
        <Link  to="/">返回首页</Link>
      </div>
    )
  }
}

export default aboutView