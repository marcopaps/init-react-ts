import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/NotFound";

export const protectedRoutes = [
    { path: "protected", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
];
