import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./components/auth/Signin";
import SignUpPage from "./components/auth/Signup";
import Loading from "./components/UI/Loading";
import MetricCard from "./components/MetricCard";
import { StoreIcon } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Error from "./components/UI/Error";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Loading/>
  },
  {
    path: "/sign-in",
    element: <SignInPage/>
  },
  {
    path: "/sign-up",
    element: <SignUpPage/>
  },
  {
    path: "/demo",
    element: <MetricCard title="Total Revenue" value="1,204" icon= {<StoreIcon className="h-9 w-9 text-primary" />} subtext="This month"/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "*",
    element: <Error/>
  }

]
);

function App() {
  return(
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App;