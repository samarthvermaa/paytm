import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, SignUp, SignIn, Dashboard } from "./components";
import {} from "./components";
import { TransferMoney } from "./components/TransferMoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/send",
    element: <TransferMoney />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
