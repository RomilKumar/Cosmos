import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import App from "./Layout/App.jsx";
import "./Styles/index.css";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
//Components to be written now!!!
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="home" element={<HomePage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      {/* <Route path="logout" element={<RegisterPage/>}/> */}
    </Route>
  )
)
createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>       
    </StrictMode>
);
