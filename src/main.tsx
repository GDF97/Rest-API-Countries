import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import CountryDetails from "./routes/CountryDetails.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={route} />
    </ThemeProvider>
  </React.StrictMode>
);
