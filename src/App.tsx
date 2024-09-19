import { RouterProvider } from "react-router-dom";
import { router } from "./app/routes";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <RouterProvider router={router}></RouterProvider>
    </SnackbarProvider>
  );
}

export default App;
