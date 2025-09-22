import type { RouteObject } from "react-router-dom";
import  App from './App'
import Birthday from "./views/birthday/Birthday";

export const routes : RouteObject[] = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/birthday",
        element: < Birthday />
    }
]