import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import AddFood from '../pages/AddFood';
import { MainLayout } from '../layouts/MainLayout';

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/add-food' element={<AddFood />} />
        </Route>
      </Route>
  )
)
