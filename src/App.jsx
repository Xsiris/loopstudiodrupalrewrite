import { useState, useEffect } from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
      </Route>
  ));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App