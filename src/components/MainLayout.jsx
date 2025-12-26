import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader";

export default function MainLayout() {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            {navigation.state === "loading" && <Loader />}
            <Outlet />
            <Footer />
            <ToastContainer position="top-right" autoClose={2000} />
        </div>
    )
}