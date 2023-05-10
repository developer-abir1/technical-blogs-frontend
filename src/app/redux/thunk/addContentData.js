import { addContent } from '../action/contentAction'

export const addContentData = (content) => {
  return async (dispatch) => {
    const res = await fetch(
      'https://technical-blogs-server.vercel.app/content',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(content),
      }
    )
    const data = await res.json()
    if (data.acknowledged) {
      dispatch(
        addContent({
          _id: data.insertedId,
          ...content,
        })
      )
    }
  }
}
