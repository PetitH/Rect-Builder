// 操作pagetitle数据
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({type: 'SET_PAGE_TITLE', data: data})
  }
}