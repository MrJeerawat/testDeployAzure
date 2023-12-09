import { Navigate, useRoutes } from "react-router-dom";
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";
import Page404 from "../pages/Page404";
import HomePage from "../pages/HomePage";
import Me from "../pages/users/Me";
import UserUpdate from "../pages/users/UserUpdate";
import Post from "../pages/users/Post";
import MainLayout from "../layouts/MainLayout";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
              { path: '/', element: <HomePage /> },
              { path: '/user', 
                children:[
                    {
                        path:'me',
                        element:<Me/>
                    },
                    {
                        path:'update',
                        element:<UserUpdate/>
                    },
                    {
                        path:'posts',
                        element:<Post/>
                    },
                ]
                },
              { path: '404', element: <Page404 /> },
              { path: '*', element: <Navigate to="/404" replace /> },
            ],
        },
        { 
            path: '*', 
            element: <LogoOnlyLayout />,
            children: [
                
                { path: '*', element: <Navigate to="/404" replace /> },
                
            ]

        },
    ])
}