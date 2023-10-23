import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "../pages/sign-up/Signup";
import Signin from "../pages/sign-in/Signin";
import Home from "../pages/home/Home";
import SignupSubmit from "../pages/sign-up/SignupSubmit";
import ProjectCreation from "../pages/project-creation/CreateProject";
import ProjectDetails from "../pages/project-details/ProjectDetails";
import Layout from "../layout/Layout";



const AllRoutes = () => {


    return (
        <div>

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path="/sign-up" element={<Signup />} />
                        <Route path="/sign-in" element={<Signin />} />
                        <Route path="/signup-submit" element={<SignupSubmit />} />
                        <Route path='/create-project' element={<ProjectCreation />} />
                        <Route path='/project-details' element={<ProjectDetails />} />
                    </Routes>
                </Layout>
            </BrowserRouter>

        </div>
    );
};

export default AllRoutes;
