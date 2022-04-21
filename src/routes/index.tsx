import { BrowserRouter, useRoutes } from "react-router-dom";
import { useIsLoggedIn } from "@/hooks";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

const Routes = () => {
    const isLoggedIn = useIsLoggedIn();
    const routes = isLoggedIn ? [...protectedRoutes, ...publicRoutes] : publicRoutes;

    return useRoutes(routes);
};

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};
