import { Link } from 'react-router-dom'

const ContentCart = ({ content }) => {
  const {
    imageUrl,
    author,
    discription,
    title,
    date,
    colorCode,
    _id,
    CompanyName,
  } = content

  return (
    <Link to={`/content/${_id}`}>
      <div
        className={`card card-compact    bg-base-100 shadow-xl   border        `}
        style={{ borderColor: colorCode }}
      >
        <figure>
          <img
            src={imageUrl}
            className="h-52 w-full object-cover"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className={`card-title text-xl  `} style={{ color: colorCode }}>
            {title}
          </h2>
          <p>{discription.slice(0, 100)}</p>
          <div className="card-actions justify-between flex items-center">
            <div>
              <h2 className=" text-xl font-bold">{author}</h2>
              <h2 className=" text-xs ">{CompanyName}</h2>
            </div>
            <h2>{date}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ContentCart
