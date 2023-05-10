import { getContent } from '../action/contentAction'

export const getContentData = () => {
  return async (dispatch) => {
    const res = await fetch(
      'https://technical-blogs-server.vercel.app/contents'
    )
    const data = await res.json()
    if (data) {
      dispatch(getContent(data))
    }
  }
}
