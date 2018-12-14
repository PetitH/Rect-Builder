// action处理state
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: {pageTitle: data} })
  }
}
