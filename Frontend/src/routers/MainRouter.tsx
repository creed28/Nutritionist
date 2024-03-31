import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import CreateFood from '../pages/CreateFood';
import { MainLayout } from '../layouts/MainLayout';

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/create-food' element={<CreateFood />} />
        </Route>
      </Route>
  )
);
