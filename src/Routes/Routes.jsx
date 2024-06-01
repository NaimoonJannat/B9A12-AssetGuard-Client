import { createBrowserRouter } from "react-router-dom";
import Home from "../Shared/Home";
import Error from "../Shared/Pages/Error";

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Home></Home>, 
    errorElement:<Error></Error>,
    children:[
        {
            path:"/joinAsEmployee"
        }
    ]
    }, 
   ]);

export default router;