import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from '../src/store'
// page
import Home from '../src/view/home'

class Router extends Component {
  render() {
    return (
      <div className="App">
       <Provider store = {store}>
          <main>
            <Switch>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </main>
        </Provider>
      </div>
    );
  }
}

export default Router;
