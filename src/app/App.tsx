import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Components
import {AppLayout} from "@/components/layout/AppLayout";
import Home from "@/app/routes/Home";
import { Login } from "@/app/routes/Login";
import { Signup } from "@/app/routes/Signup";
import { Mentors } from "./routes/Mentors";

const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> },
      {path: "/login", element: <Login />},
      {path: "/signup", element: <Signup />},
      {path: "/mentors", element: <Mentors />},
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
