import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </>
  ),
)


function App() {
  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
