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
            element:<AssetList></AssetList>,
            loader: () => fetch("http://localhost:3000/assets")
        },
        {
            path:"/add-asset",
            element:<AddAsset></AddAsset>
        },
        {
            path:"/update-asset/:id",
            element:<UpdateAssetCard></UpdateAssetCard>,
            loader: ({params}) => fetch(`http://localhost:3000/assets/${params.id}`)
        },
        {
            path:"/all-requests",
            element:<AllRequests></AllRequests>,
            loader: () => fetch("http://localhost:3000/requests")
        },
        {
            path:"/employee-list",
            element:<EmployeeList></EmployeeList>,
            loader: () => fetch("http://localhost:3000/teams")
        },
        {
            path:"/add-employee",
            element:<AddEmployee></AddEmployee>,
            loader: () => fetch("http://localhost:3000/employees")
        },
        {
            path:"/profile",
            element:<Profile></Profile>
        },
        {
            path:"/my-requested-assets",
            element:<RequestedAssets></RequestedAssets>,
            loader: () => fetch("http://localhost:3000/requests")
        },
        {
            path:"/request-asset",
            element:<RequestAsset></RequestAsset>,
            loader: () => fetch("http://localhost:3000/assets")
        },
        {
            path:"/my-team",
            element:<MyTeam></MyTeam>,
            loader: () => fetch("http://localhost:3000/teams")
        }
    ]
    }, 
   ]);

export default router;