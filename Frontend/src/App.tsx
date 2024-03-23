import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';

const App = () => {
  return (
    <RouterProvider router={MainRouter} />
  )
}

export default App
