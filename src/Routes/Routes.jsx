import { createBrowserRouter } from "react-router-dom";
import Home from "../Shared/Home";
import Error from "../Shared/Pages/Error";
import Root from "../Root";
import JoinEmployee from "../Guest/JoinEmployee";
import JoinHR from "../Guest/JoinHR";
import Login from "../Guest/Login";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    errorElement:<Error></Error>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/join-employee",
            element:<JoinEmployee></JoinEmployee>
        },
        {
            path:"/join-hr",
            element:<JoinHR></JoinHR>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
    ]
    }, 
   ]);

export default router;