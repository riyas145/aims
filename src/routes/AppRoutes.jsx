import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { PrivateRoute } from "./PrivateRoute";
import { Home } from "../page/home/Home";
import { MainLayout } from "../layout/mainLayout/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route path="/home" element={<Home />} />
      </Route>
    </>
  )
);
export const AppRoutes = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
