import React from 'react'
import { NavLink, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';

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
      element: <Home />
    },
    {
      path: 'catalog',
      element: <Catalog/>
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