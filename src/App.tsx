import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
      <Cart />
    </div>
  );
}

export default App;
