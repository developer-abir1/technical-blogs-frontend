import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout/MainLayout'
import DashbordLayout from '../../layout/dashboardLayout/DashbordLayout'
import HomePages from '../../pages/Main/HomePages'
import ContentDetails from '../../pages/Main/ContentDetails'
import Dashbord from '../../pages/dashbord/dashboard/Dashbord'
import AddContent from '../../pages/dashbord/addContent/addContent'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePages />,
      },
      {
        path: '/content/:id',
        element: <ContentDetails />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashbordLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashbord />,
      },
      {
        path: 'addContent',
        element: <AddContent />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div>
        <div className=" bg-red-50">
          <h1 className="text-4xl text-center">404</h1>

          <h2 className=" text-center text-red-500">Waring</h2>
        </div>
      </div>
    ),
  },
])
