import AuthProvider from "../../Contexts/AuthProvider/AuthProvider";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddCategory from "../../Pages/Home/addCategories/AddCategory";
import Home from "../../Pages/Home/Home/Home";
import VisaCategories from "../../Pages/Home/VisaCategories/VisaCategories";
import VisaDetails from "../../Pages/Home/VisaDetails/VisaDetails";
import VisaDetailsReview from "../../Pages/Home/VisaDetails/VisaDetails";
import Login from "../../Pages/Login/Login";
import ReviewsCollection from "../../Pages/ReviewsCollection/ReviewsCollection";
import Signup from "../../Pages/Signup/Signup";
import VIsaCatDetails from "../../Pages/VisaCatDetails/VIsaCatDetails";
import VisaCategoriesAll from "../../Pages/VisaCategoriesall/VisaCategoriesAll";
import PrivateRoute from "../../Router/PrivateRoute/PrivateRoute";

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
                element: <VisaCategoriesAll></VisaCategoriesAll>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/visacategories/:id',
                element: <VisaDetails></VisaDetails>,
                loader: ({ params }) => fetch(`https://hafiz-consultancy-server-hafiz0073.vercel.app/visacategories/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <AuthProvider><ReviewsCollection></ReviewsCollection></AuthProvider>,
            },
            {
                path: '/add-category',
                element: <AuthProvider><AddCategory></AddCategory></AuthProvider>,
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

