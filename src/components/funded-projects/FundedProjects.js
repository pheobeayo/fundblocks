import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2
    
} from "./funded.styles";
import arrow from "../../assets/arrow.png";
import brain from "../../assets/brain.png";
import health from "../../assets/health.png";
import data from "../../assets/data.png";
import  robo from "../../assets/robo.png";
import edu from "../../assets/edu.png";
import cloud from "../../assets/cloud.png";







const FundedProjects = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Funded Projects</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Projects that achieved funding success via the platform</h3>
                </Header>

                <SummaryContainer1>
                   <img src={brain} alt="brain" />
                    <img src={health} alt="health"/>
                    <img src={data} alt="data" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={robo} alt="robo" />
                    <img src={edu} alt="edu" />
                    <img src={cloud} alt="cloud" />
                </SummaryContainer2>
                
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default FundedProjects;