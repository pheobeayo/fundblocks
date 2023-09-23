import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2
    
} from "./ongoing.styles";
import arrow from "../../assets/arrow.png";
import viral from "../../assets/viral.png";
import auto from "../../assets/auto.png";
import nano from "../../assets/nano.png";
import  mind from "../../assets/mind.png";
import remote from "../../assets/remote.png";
import cyber from "../../assets/cyber.png";
import { Link } from "react-router-dom";







const OngoingProjects = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Ongoing Projects</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>List of ongoing projects to invest in</h3>
                </Header>

                <SummaryContainer1>
                <Link to='/project-details' style={{ textDecoration: 'none', color: 'white' }}>   <img src={viral} alt="viral" /></Link>
                    <img src={auto} alt="auto"/>
                    <img src={nano} alt="nano" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={mind} alt="mind" />
                    <img src={remote} alt="remote" />
                    <img src={cyber} alt="cyber" />
                </SummaryContainer2>
                
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default OngoingProjects;