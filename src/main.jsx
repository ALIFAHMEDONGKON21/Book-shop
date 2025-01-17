import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dasborad from './components/Dasborad/Dasborad.jsx';
import Bookdetails from './components/Bookdetails/Bookdetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
       path:'books/:bookId',
       element:<Bookdetails></Bookdetails>,
       loader :()=>fetch('/public/books.json')
      },
     
      {
        path: 'Dasborad',
        element:<Dasborad></Dasborad>,
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
