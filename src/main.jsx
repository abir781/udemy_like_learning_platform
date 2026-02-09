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
import Chapter from './Chapter.jsx';
import Coursecreate from './Coursecreate.jsx';
import TeacherRoute from './Teacherroute.jsx';
import Unauthorized from './Unauthorized.jsx';
import Payment from './Payment.jsx';
import Adminroute from './Adminroute.jsx';
import Admindashboard from './Admindashboard.jsx';
import TeacherApplication from './Teacherapplication.jsx';
import AdminLayout from './AdminLayout.jsx';
import Approval from './Approval.jsx';
import Announce from './Announce.jsx';


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
      },
      {
         path:"/coursedetails/:id/chapter/:cid",
        element:<PrivateRoute>
          <Chapter></Chapter>
        </PrivateRoute>

      },
        {
         path:"/coursecreate",
        element:<PrivateRoute>
          <TeacherRoute>
              <Coursecreate></Coursecreate>

          </TeacherRoute>
          
        </PrivateRoute>

      },
      {
        path:"/announce",
        element: <PrivateRoute>
          <TeacherRoute>
            <Announce></Announce>
          </TeacherRoute>
        </PrivateRoute>
      },
      {
        path: "/admin/coursecreate",
        element: <PrivateRoute>
          <Adminroute>
            <Coursecreate></Coursecreate>
          </Adminroute>
        </PrivateRoute>

      },

        {
        path: "/applyasteacher",
        element: <TeacherApplication></TeacherApplication>

         
          
       
      },
     {
       path: "/admin",
          element: (
            <PrivateRoute>
      <Adminroute>
        <AdminLayout />
      </Adminroute>
    </PrivateRoute>
  ),
  children: [
    {
      index: true, // default /admin route
      Component: Admindashboard
    },
    {
      path: "approval", // relative path: /admin/approval
      Component: Approval
    }
  ]
},
      {
        path:"/unauthorized",
        Component: Unauthorized,
      },
      {
        path:'payment/:id',
        Component: Payment
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
