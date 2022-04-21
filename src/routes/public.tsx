import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

export const publicRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFoundPage /> },
];
