import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryCard,
    ImageContainer


} from "./testimonials.styles";
import arrow from "../../assets/arrow.png";
import jerome from "../../assets/jerome.svg";
import eleanor from "../../assets/eleanor.svg";
import brooklyn from "../../assets/brooklyn.svg";
import { BsStarFill } from "react-icons/bs";







const Testimonials = () => {


    return (
        <div className="container mx-auto">
            <ProjectsParent>
                <ProjectsWrapper>
                    <Header><h2>Testimonials</h2>
                        <img src={arrow} alt="arrow" />
                        <h3>Get inspired straight from the source</h3>
                    </Header>

                    <SummaryContainer1>
                        <SummaryCard>
                        <ImageContainer><img src={jerome} alt='jerome'/> <span><h3>Jerome Bell</h3> 
                        <BsStarFill/> 
                        </span> 
                        </ImageContainer>
                            <h4>Just the support I needed</h4>
                            <p>I had a vision for a groundbreaking tech
                                <br></br>startup, but turning it into reality seemed
                                <br></br>like an insurmountable task. Then I
                                <br></br>stumbled upon this website. Their
                                <br></br>step-by-step guidance, from refining my
                                <br></br>idea to creating a solid business plan,
                                <br></br>propelled my startup to success.
                            </p>
                        </SummaryCard>

                        <SummaryCard>
                       <ImageContainer> <img src={eleanor} alt='eleanor'/><span><h3>Eleanor Pena</h3><BsStarFill/></span></ImageContainer>
                            <h4>I’m glad I found this website</h4>
                            <p>"Launching my tech startup was a nerve-
                                <br></br>wracking journey until I discovered this
                                <br></br>website. Their comprehensive resources,
                                <br></br> expert mentorship, and interactive tools
                                <br></br>provided me with the roadmap I needed.
                                <br></br>With their unwavering support, my startup
                                <br></br>took flight, and I'm now living my dream’’
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                           <ImageContainer><img src={brooklyn} alt='brooklyn'/><span><h3>Brooklyn Simmons</h3><BsStarFill/></span></ImageContainer>
                            <h4>Launching made easy</h4>
                            <p>"I'm not a tech-savvy person, but I had this
                                <br></br>ingenious app concept. The thought
                                <br></br>of launching a startup overwhelmed me
                                <br></br>until I found this website. Their
                                <br></br>user-friendly interface and insightful
                                <br></br>resources transformed my idea into a
                                <br></br>full-fledged business’’
                            </p>
                        </SummaryCard>
                    </SummaryContainer1>
                </ProjectsWrapper>



            </ProjectsParent>
        </div>



    )





}


export default Testimonials;