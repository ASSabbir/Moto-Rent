import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Available from "../available/Available";
import Details from "../available/Details";
import Mybooking from "../available/Mybooking";
import AddCar from "../Add/AddCar";
import MyCars from "../Add/MyCars";
import Update from "../Add/Update";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Roots></Roots>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/availablecars',
                element:<Available></Available>
            },
            {
                path:'/car/:id',
                element:<Details></Details>
            },
            {
                path:'/mybooking',
                element:<Mybooking></Mybooking>
            },
            {
                path:'/addcar',
                element:<AddCar></AddCar>
            },
            {
                path:'/mycars',
                element:<MyCars></MyCars>
            },
            {
                path:'/update/:id',
                element:<Update></Update>
            }
        ]
    }
])

export default Routes;