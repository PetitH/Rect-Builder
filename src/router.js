import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// home （首页）
import Home from '../src/view/home'
// about (关于)
import About from '../src/view/about'

class Router extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    )
  }
}

export default Router
