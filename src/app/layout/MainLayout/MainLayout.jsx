import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <header className=" container m-auto">
        <div className="navbar bg-purple-100 rounded-md">
          <div className="flex-1">
            <Link to={'/'}>
              {' '}
              <a className="btn btn-ghost normal-case text-xl">JST Blog</a>
            </Link>
          </div>
          <div className="flex-none   z-10">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>

              <Link to={'/dashboard'}>
                {' '}
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default MainLayout
