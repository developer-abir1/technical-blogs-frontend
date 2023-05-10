import { deleteContent } from '../action/contentAction'

export const deleteContentData = (id) => {
  return async (dispatch) => {
    const res = await fetch(
      `https://technical-blogs-server.vercel.app/content/${id}`,
      {
        method: 'DELETE',
      }
    )
    const data = await res.json()
    if (data.acknowledged) {
      dispatch(deleteContent(id))
    }
  }
}
