import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "@/routes";
import { MainLayout } from "@/layouts";
import "./style.css";

const container = document.getElementById("root") as Element;
const root = ReactDOM.createRoot(container);

root.render(
    <MainLayout>
        <AppRoutes />
    </MainLayout>,
);
