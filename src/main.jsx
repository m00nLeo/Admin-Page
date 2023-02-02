import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "https://server-hotel.onrender.com";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Reac - Query */}
    <QueryClientProvider client={queryClient}>
      {/* React-router-dom */}
      {/* <RouterProvider router={router} /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
