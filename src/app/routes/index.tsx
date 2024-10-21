import { createBrowserRouter } from "react-router-dom";
import { Lab1Page } from "../../pages/lab1";
import { Lab2Page } from "../../pages/lab2";

export const router = createBrowserRouter([
  {
    path: "/lab1",
    element: <Lab1Page />,
  },
  {
    path: "/lab2",
    element: <Lab2Page />,
  },
]);
