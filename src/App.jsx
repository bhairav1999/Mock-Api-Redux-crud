import React from 'react'
import NavBar from './navbar/NavBar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import ReadCrud from './pages/ReadCrud'
import FormCrud from './pages/FormCrud'
import EditUser from './pages/EditUser'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <FormCrud />
      },
      {
        path: "/read",
        element: <ReadCrud />
      },
      {
        path: "/edit/:id",
        element: <EditUser />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
    // <div><NavBar /></div>
  )
}

export default App