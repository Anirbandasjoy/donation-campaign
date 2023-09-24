import { createBrowserRouter } from "react-router-dom";
import axios from "axios";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import CategoryDetails from "../components/CategoryDetails";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => axios.get("/data.json")
            },
            {
                path: "/category/:id",
                element: <CategoryDetails />
            }
        ]
    }
])