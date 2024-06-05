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
import UpdateAssetCard from "../Hr/UpdateAssetCard";
import RequestedAssets from "../Normal/RequestedAssets";
import RequestAsset from "../Normal/RequestAsset";
import MyTeam from "../Normal/MyTeam";
import { AdminRoute, EmployeeRoute, PrivateRoute } from "../PrivateRoute";

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
            element: <AdminRoute><AssetList></AssetList></AdminRoute>,
            loader: () => fetch("http://localhost:3000/assets")
        },
        {
            path:"/add-asset",
            element:<AdminRoute><AddAsset></AddAsset></AdminRoute>
        },
        {
            path:"/update-asset/:id",
            element:<AdminRoute><UpdateAssetCard></UpdateAssetCard></AdminRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/assets/${params.id}`)
        },
        {
            path:"/all-requests",
            element:<AdminRoute><AllRequests></AllRequests></AdminRoute>,
            loader: () => fetch("http://localhost:3000/requests")
        },
        {
            path:"/employee-list",
            element:<AdminRoute><EmployeeList></EmployeeList></AdminRoute>,
            loader: () => fetch("http://localhost:3000/teams")
        },
        {
            path:"/add-employee",
            element:<AdminRoute><AddEmployee></AddEmployee></AdminRoute>,
            loader: () => fetch("http://localhost:3000/employees")
        },
        {
            path:"/profile",
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:"/my-requested-assets",
            element:<EmployeeRoute><RequestedAssets></RequestedAssets></EmployeeRoute>,
            loader: () => fetch("http://localhost:3000/requests")
        },
        {
            path:"/request-asset",
            element:<EmployeeRoute><RequestAsset></RequestAsset></EmployeeRoute>,
            loader: () => fetch("http://localhost:3000/assets")
        },
        {
            path:"/my-team",
            element:<EmployeeRoute><MyTeam></MyTeam></EmployeeRoute>,
            loader: () => fetch("http://localhost:3000/teams")
        }
    ]
    }, 
   ]);

export default router;