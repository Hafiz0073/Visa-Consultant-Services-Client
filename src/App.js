import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';


function App() {


  return (
    <div className='max-w-screen-lg mx-auto' >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;