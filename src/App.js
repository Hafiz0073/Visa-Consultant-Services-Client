import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from './hooks/useTitle';



function App() {
  useTitle()

  return (
    <div className='max-w-screen-lg mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
