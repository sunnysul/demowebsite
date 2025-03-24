import React, { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import TeamPage from "./components/TeamPage";
import EpcPage from "./components/EPCPage";
import Clients from "./components/Clients";
import ConsultancyPage from "./components/ConsultancyPage";



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
            path: "/gallery",
            element : <Gallery/>
           },
           {
            path: "/team",
            element : <TeamPage/>
           },
           {
            path: "/epc",
            element : <EpcPage/>
           },

           {
            path: "/client",
            element: <Clients/>
           },
           {
            path : "/consultancy",
            element : <ConsultancyPage/>
           },

        ]
    }
])

export default router;