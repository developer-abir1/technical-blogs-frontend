import { Link, Outlet, useLocation } from 'react-router-dom'

const DashbordLayout = () => {
  const activeStyle = 'bg-yellow-500  rounded   text-white   '
  const activeStyle2 = 'bg-red-400  rounded   text-white   '
  const { pathname } = useLocation()
  return (
    <div>
      <div className="drawer drawer-mobile   ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" drawer-content    bg-slate-100  ">
          <div className=" py-4 px-4">
            <label
              htmlFor="my-drawer-2"
              className="btn  hover:bg-purple-400    bg-purple-500 border-none drawer-button   lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 18"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            </label>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side   ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <div className=" w-80 bg-white">
            <ul className="menu p-4  overflow-y-auto w-full h-full   gap-4">
              <Link to={'/dashboard'}>
                <li
                  className={`${
                    pathname.includes('dashboard') ? activeStyle2 : null
                  }`}
                >
                  <span> Dashboard</span>
                </li>
              </Link>
              <Link to={'addContent'}>
                <li
                  className={`${
                    pathname.includes('addContent') ? activeStyle : null
                  }`}
                >
                  <span> Add Content</span>
                </li>
              </Link>
              <div className="  absolute  bottom-12 border-2 border-green-300 w-72 text-center">
                <Link to={'/'}>Back To Home</Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashbordLayout
