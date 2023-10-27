import React from "react";
import {
    ButtonContainer,
    HeroContainer, HomeParent, HomeWrapper, LButton, TextContainer, EButton, CentreWrapper
} from "./home.styles";
import Navbar from "../../components/navbar/index";
import landingimage from "../../assets/landingimage.png";
import Welcome from "../../components/welcome/Welcome";
import OngoingProjects from "../../components/ongoing-projects/OngoingProjects";
import FundedProjects from "../../components/funded-projects/FundedProjects";
import Testimonials from "../../components/testimonials/Testimonials";
import Projects from "../../components/projects/Projects";
import Crypto from "../../components/crypto/Crypto";
import Subfooter from "../../components/sub-footer/Subfooter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";









const Home = () => {






    return (
        <HomeParent>
            <HomeWrapper>
                <div className="mx-8 pt-16">
                    <Navbar />
                </div>
                <CentreWrapper>
                    <TextContainer>
                        <h1>Revolutionizing Tech
                        <br></br>Startup Financing </h1>
                        <h3>Unleash the Potential of Your Startup with Decentralized
                            <br></br>Funding and Support</h3>
                        <ButtonContainer>
                            <Link to='/create-project' style={{ textDecoration: 'none', color: 'black' }}>  <LButton>
                                Launch Project    </LButton></Link>
                            <Link to='/project-details' style={{ textDecoration: 'none', color: 'white' }}>  <EButton>
                                Explore more    </EButton></Link>
                        </ButtonContainer>
                    </TextContainer>
                    <HeroContainer><img src={landingimage} alt="landingimage" /></HeroContainer>
                </CentreWrapper>
                <div className="mx-10 justify-center">
                    <Welcome />
                </div>
                <div className="justify-center pr-6">
                    <OngoingProjects />

                </div>
                <FundedProjects />
                <Testimonials />
                <Projects />
                <Crypto />


                <div>
                    <Subfooter />
                </div>
                <div>
                    <Footer />
                </div>
            </HomeWrapper>
        </HomeParent >

    )



}


export default Home;