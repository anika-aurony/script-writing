import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    },
]);

export default router;