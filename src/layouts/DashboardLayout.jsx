import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar.jsx/Sidebar";

const DashboardLayout = () => {
    return (
        <div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;