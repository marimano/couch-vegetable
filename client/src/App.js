import React from 'react'
import { NavLink, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return <>
    <header className='header'>
      <NavLink to='/'>Головна</NavLink>
      <NavLink to='/catalog'>Каталог</NavLink>
      <NavLink to='/about'>Про нас</NavLink>
    </header>
    <Outlet/>
    <footer>(c) 2024</footer>
  </>
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout/>,
    children: [{
      index: true,
      element: 'Головна сторінка'
    },
    {
      path: 'catalog',
      element: 'Каталог'
    },
    {
      path: 'about',
      element: 'Про нас'
    },
    {
      path: '*',
      element: <div>No such page</div>
    }]
  }
]);

export default () => {
  return <RouterProvider router={router}/>
}