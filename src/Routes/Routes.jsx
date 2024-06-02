import { createBrowserRouter } from "react-router-dom";
import Home from "../Shared/Home";
import Error from "../Shared/Pages/Error";
import Root from "../Root";
import JoinEmployee from "../Guest/JoinEmployee";
import JoinHR from "../Guest/JoinHR";
import Login from "../Guest/Login";
import AssetList from "../Hr/AssetList";
import AddAsset from "../Hr/AddAsset";
import AllRequests from "../Hr/AllRequests";
import EmployeeList from "../Hr/EmployeeList";
import AddEmployee from "../Hr/AddEmployee";
import Profile from "../Shared/Pages/Profile";

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
        {
            path:"/asset-list",
            element:<AssetList></AssetList>
        },
        {
            path:"/add-asset",
            element:<AddAsset></AddAsset>
        },
        {
            path:"/all-requests",
            element:<AllRequests></AllRequests>
        },
        {
            path:"/employee-list",
            element:<EmployeeList></EmployeeList>
        },
        {
            path:"/add-employee",
            element:<AddEmployee></AddEmployee>
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
    ]
    }, 
   ]);

export default router;