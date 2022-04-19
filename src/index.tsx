import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts";
import AppRoutes from "@/routes";

ReactDOM.render(
    <React.StrictMode>
        <MainLayout>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </MainLayout>
    </React.StrictMode>,
    document.getElementById("root"),
);
