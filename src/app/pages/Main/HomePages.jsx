import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContentData } from '../../redux/thunk/getContentData'
import ContentCart from '../../components/home/contentCart'

const HomePages = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(getContentData())
  }, [dispath])

  const contents = useSelector((state) => state.content.contents.data)

  return (
    <div className=" container m-auto">
      <h2 className=" my-4 text-3xl">Content </h2>
      <div>
        <label htmlFor="">Sort By</label>
        <select>
          <option>Chooce</option>
          <option value="lastUpload">Fast Upload</option>
          <option value="fastUpload">Last Upload </option>
        </select>
      </div>
      <div className="   grid md:grid-cols-3 px-3 p-3 sm:grid-cols-2  grid-cols-1 gap-3  justify-items-center">
        {contents?.map((content) => (
          <ContentCart key={content.title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default HomePages
