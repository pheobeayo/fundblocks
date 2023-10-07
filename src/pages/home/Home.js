import React from "react";
import {
    BarWrapper,
    ButtonContainer,
    CentreWrapper,
    CryptoContainer,
    EButton,
    FooterWrapper,
    FundedContainer,
    HeroContainer,
    HomeParent,
    HomeWrapper,
    LButton,
    OngoingContainer,
    ProjectsContainer,
    SubfooterWrapper,
    TestimonialsContainer,
    TextContainer,
    WelcomeWrapper,
    



} from "./home.styles";
import Navbar from "../../components/navbar/Navbar";
import landingimage from "../../assets/landingimage.png";
import Welcome from "../../components/welcome/Welcome";
import OngoingProjects from "../../components/ongoing-projects/OngoingProjects";
import FundedProjects from "../../components/funded-projects/FundedProjects";
import Testimonials from "../../components/testimonials/Testimonials";
import Projects from "../../components/projects/Projects";
import Crypto from "../../components/crypto/Crypto";
import Subfooter from "../../components/sub-footer/Subfooter";
import Footer from "../../components/footer/Footer";
import {Link} from "react-router-dom";









const Home = () => {






    return (
        <HomeParent>
            <HomeWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <CentreWrapper>
                    <TextContainer>
                        <h1>Revolutionizing Tech
                            <br></br> Startup Financing</h1>
                        <h2>Unleash the Potential of Your Startup with Decentralized
                            <br></br>Funding and Support</h2>
                        <ButtonContainer>
                          <Link  to='/create-project' style={{ textDecoration: 'none', color: 'black' }}>  <LButton>Launch Project</LButton></Link>
                          <Link to='/project-details' style={{ textDecoration: 'none', color: 'white' }}>  <EButton  >Explore More</EButton></Link>
                        </ButtonContainer>
                    </TextContainer>
                    <HeroContainer><img src={landingimage} alt="landingimage" /></HeroContainer>
                </CentreWrapper>
                <WelcomeWrapper>
                    <Welcome />
                </WelcomeWrapper>
                <OngoingContainer>
                    <OngoingProjects/>
                </OngoingContainer>
                <FundedContainer>
                    <FundedProjects/>
                </FundedContainer>
                <TestimonialsContainer>
                    <Testimonials/>
                </TestimonialsContainer>
                <ProjectsContainer>
                    <Projects/>
                </ProjectsContainer>
                <CryptoContainer>
                    <Crypto/>
                </CryptoContainer>
                <SubfooterWrapper>
                    <Subfooter/>
                </SubfooterWrapper>
                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>
            </HomeWrapper>



        </HomeParent>




    )



}


export default Home;