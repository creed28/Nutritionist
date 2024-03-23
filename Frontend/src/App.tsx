import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './routers/MainRouter';

const App = () => {
  return (
    <RouterProvider router={MainRouter} />
  )
}

export default App
