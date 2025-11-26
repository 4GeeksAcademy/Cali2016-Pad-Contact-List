// Import necessary components and functions
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";


import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";


export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
        <Route path="/" element={<Contact />} />  
        <Route path="/home" element={<Home />} />  
        <Route path="/demo" element={<Demo />} />
        <Route path="/contacts/:theId" element={<Single />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<AddContact />} />

        </Route>

    )
);
