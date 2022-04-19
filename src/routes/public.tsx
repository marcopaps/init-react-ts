import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound/index";

export const publicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
];
