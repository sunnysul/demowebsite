import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ResidentialSolar from "./components/ResidentialSolar";
import Gallery from "./components/Gallery";
import ClientPage from "./components/ClientPage";


const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/header",
                element: <Header/>
            },
            {
                path: "/footer",
                element: <Footer/>
            },
            {
                path: "/",
                element: <HomePage/>
            },
           {
            path: "/contact",
            element: <Contact/>
           },
           {
            path:  "/service",
            element: <Services/>
           },
           {
            path: "/aboutus",
            element: <AboutUs/>
           },
           {
            path: "/residentail",
            element : <ResidentialSolar/>
           },
           {
            path: "/gallery",
            element : <Gallery/>
           },
           {
            path: "/client",
            element : <ClientPage/>
           },

           

        ]
    }
])

export default router;