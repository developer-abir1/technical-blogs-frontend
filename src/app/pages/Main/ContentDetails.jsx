import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ContentDetails = () => {
  const { id } = useParams()
  const content = useSelector((state) => state.content.contents.data)
  const contentDetails = content?.find((content) => content._id === id)
  return (
    <div className=" container m-auto">
      <h2 className=" my-4 text-3xl">Content Details </h2>
      <div className=" flex justify-between items-center">
        <div>
          <h2
            className=" text-4xl font-bold"
            style={{
              color: contentDetails.colorCode,
            }}
          >
            {contentDetails?.title}
          </h2>
          <h2 className="text-xl">{contentDetails?.time}</h2>
        </div>
        <div>
          <h2 className="text-3xl font-bold">{contentDetails.author}</h2>
          <h2 className="text-xl">{contentDetails.designation}</h2>
          <h2>{contentDetails?.date}</h2>
        </div>
      </div>
      <div className="     ">
        <figure>
          <img
            src={contentDetails?.imageUrl}
            className="   w-full  object-cover h-96 "
            alt={contentDetails?.title}
          />
        </figure>
        <div className="card-body">
          <p>{contentDetails?.discription}</p>
          <div className="card-actions justify-between flex items-center">
            <h2 className=" text-xl font-bold">{contentDetails?.author}</h2>
            <h2>{contentDetails?.date}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentDetails
