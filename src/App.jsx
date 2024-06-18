import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/RootLayout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Post from './Pages/Post';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route >
        <Route index element={<Home/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/post' element={<Post />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <>
    
    <RouterProvider router={router}>

</RouterProvider>
    
    </>
  )
}

export default App