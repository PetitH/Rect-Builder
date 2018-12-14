import React, { Component } from 'react';
import '../src/statics/css/App.css';
import Router from '../src/router'
// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from '../src/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    );
  }
}

export default App;
