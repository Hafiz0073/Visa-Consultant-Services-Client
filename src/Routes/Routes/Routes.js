import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import VisaCategories from "../../Pages/Home/VisaCategories/VisaCategories";
import VisaDetails from "../../Pages/Home/Visadetails/VisaDetails";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/visacategories',
                element: <VisaCategories></VisaCategories>,
            },
            {
                path: '/visadetails/:id',
                element: <VisaDetails></VisaDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/visacategories/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    }
])

export default router

