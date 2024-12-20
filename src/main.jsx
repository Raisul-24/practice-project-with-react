import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import router from "./Router/Router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
