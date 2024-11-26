import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Main from './components/home.jsx'
import Character from './components/character.jsx'
import Profile from './components/profile.jsx'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>
      },
      {
        path:"/profile",
        element: <Profile/>
      },
      {
        path: "/character",
        element: <Character />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
