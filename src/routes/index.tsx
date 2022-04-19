import { useRoutes } from "react-router-dom";
import { useIsLoggedIn } from "@/hooks";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";

const AppRoutes = () => {
    const isLoggedIn = useIsLoggedIn();
    const routes = isLoggedIn ? protectedRoutes : publicRoutes;

    const element = useRoutes([...routes]);
    return <>{element}</>;
};

export default AppRoutes;
