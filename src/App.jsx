import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/RootLayout';
import Home from './Pages/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route >
        <Route index element={<Home/>} />
        {/* <Route path='/shop' element={<Shop title={` Products`} />} /> */}
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