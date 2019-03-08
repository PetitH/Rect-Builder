
export function changeTitle() {
  const { dispatch } = this.props
  dispatch({ type: 'SET_PAGE_TITLE', data: '123'})
}