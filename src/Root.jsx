import { Outlet } from "react-router-dom";

import Footer from "./Shared/Footer";
import Header from "./Shared/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;