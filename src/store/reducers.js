import { combineReducers } from 'redux'
import defaultState from './state'

// pagetitle 数据
function pageTitle (state = defaultState.pageTitle, action) {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

// infoList 数据
function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
       return state
  }
}

// 导出数据
export default combineReducers ({
  pageTitle,
  infoList
})