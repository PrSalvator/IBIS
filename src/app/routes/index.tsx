import { createBrowserRouter } from "react-router-dom";
import { Lab1Page } from "../../pages/lab1";

export const router = createBrowserRouter([
    {
        path: "/lab1",
        element: <Lab1Page/>
    }
])