import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts";
import { AppRoutes } from "@/routes";
import "./style.css";

const container = document.getElementById("root") as Element;
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <MainLayout>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </MainLayout>
    </React.StrictMode>,
);
