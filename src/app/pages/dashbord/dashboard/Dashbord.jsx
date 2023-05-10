import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContentData } from '../../../redux/thunk/getContentData'
import { deleteContentData } from '../../../redux/thunk/deleteContentData'

const Dashbord = () => {
  const contents = useSelector((state) => state.content.contents?.data)

  const dispath = useDispatch()
  useEffect(() => {
    dispath(getContentData())
  }, [dispath, contents])

  return (
    <div>
      <div className=" px-8 ">
        <h1>All Content</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Action</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {contents?.map((content) => (
                <tr key={content._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={content.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{content.author}</div>
                        <div className="text-sm opacity-50">
                          {content.companyName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {content.designation}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {content.date}
                    </span>
                  </td>
                  <td>
                    <span
                      className="w-4 h-4 rounded-full inline-block mr-1"
                      style={{ backgroundColor: content.colorCode }}
                    ></span>
                    {content.colorCode}
                  </td>
                  <td>
                    {/* needs delete svg icon */}
                    <button
                      onClick={() => dispath(deleteContentData(content._id))}
                      className="btn  btn-ghost btn-xs"
                    >
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          // d="M6 18L18 6M6 6l12 12"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashbord
