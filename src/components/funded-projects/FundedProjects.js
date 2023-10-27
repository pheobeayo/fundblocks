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
        <div className="container mx-auto">
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Funded Projects</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Projects that achieved funding success via the platform</h3>
                </Header>

                <SummaryContainer1>
                   <img src={brain} alt="brain" className='lg:w-64'/>
                    <img src={health} alt="health" className='lg:w-64'/>
                    <img src={data} alt="data" className='lg:w-64'/>
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={robo} alt="robo" className='lg:w-64'/>
                    <img src={edu} alt="edu" className='lg:w-64'/>
                    <img src={cloud} alt="cloud" className='lg:w-64'/>
                </SummaryContainer2>
                
            </ProjectsWrapper>



        </ProjectsParent>


</div>



    )





}


export default FundedProjects;