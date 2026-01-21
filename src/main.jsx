import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Root from './Root.jsx'
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Authprovider from './Authprovider.jsx';
import Courses from './Courses.jsx';
import Coursedetails from './Coursedetails.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:"/login",
        Component:Login,
      },
      {
        path:"/signup",
        Component: Signup,
      },
      {
        path:"/courses",
        Component: Courses,
      },
      {
        path:"/coursedetails/:id",
        element:<PrivateRoute>
          <Coursedetails></Coursedetails>
        </PrivateRoute>
      }
      
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>

      <RouterProvider router={router} />

    </Authprovider>
   
  </StrictMode>,
)
