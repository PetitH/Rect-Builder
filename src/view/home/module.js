// import { setPageTitle } from '../../store/action/test'
import fetch from '../../api/axios'
import Server from '../../api/server'
// 改变标题
export function changeTitle() {
  // const { dispatch } = this.props
  // dispatch({ type: 'SET_PAGE_TITLE', data: {pageTitle: '123'}})
  // dispatch(setPageTitle(1234))
  fetch({method: 'GET', url:Server.login}).then(ret =>{
    console.info(ret)
  }).catch(error => {
    console.info(error)
  })
}