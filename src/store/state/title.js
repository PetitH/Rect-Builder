const titleData = {
  pageTitle: 'react'
}
export default function pageTitle (state = titleData, action) {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}