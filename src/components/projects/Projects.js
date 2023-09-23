import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    SummaryWrapper,
    SummaryWrapper2

} from "./projects.styles";
import arrow from "../../assets/arrow.png";
import line2 from "../../assets/line2.png";







const Projects = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Projects, Restrictions and Caveat</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Find more information about projects, restrictions and caveat</h3>
                </Header>
                <SummaryWrapper>
                    <SummaryContainer1>
                        <img src={line2} alt='line2' />
                        <h4>Types of
                            <br></br>project we are
                            <br></br>accepting</h4>
                    </SummaryContainer1>
                    <SummaryContainer2>
                        <p>Our current emphasis is on aiding tech start-ups that have secured seed funding and
                            <br></br>moved beyond the ideation phase. We hold the belief that start-ups at this juncture hold
                            <br></br>more significant potential for success and are better poised to provide value to both their
                            <br></br>customers and investors</p>
                        <p>Through our stipulation of seed funding, our intention is to ascertain that the start-ups
                            <br></br>we engage with possess a proven concept and have exhibited their capability to attract
                            <br></br>investments. This enables us to concentrate our resources and assistance on start-ups
                            <br></br>that exhibit a greater potential for success, thereby increasing the probability of yielding
                            <br></br>returns for our investors.</p>
                        <p>Though we acknowledge the ingenuity and novelty involved in conceptualizing a new
                            <br></br>tech start-up, our conviction lies in the notion that extending support during the seed
                            <br></br>funding phase can wield a more substantial influence on the start-up's prosperity. This
                            <br></br>developmental stage usually demands advanced expertise, strategic counsel, and
                            <br></br>operational backing - areas in which our capabilities are most adept</p>
                    </SummaryContainer2>
                </SummaryWrapper>
                <SummaryWrapper2>
                    <SummaryContainer1>
                        <img src={line2} alt="line2" />
                        <h4>Possible
                            <br></br>requirement to
                            <br></br>be aware of</h4>
                        <img src={line2} alt="line2" />
                        <h4>Caveat you
                            <br></br>should know</h4>

                    </SummaryContainer1>
                    <SummaryContainer2>
                        <p>The project must be functional
                            <br></br>Must already have a community or a group of clients
                            <br></br>Must have a received a seed funding
                            <br></br>Must have passed the ideation stage</p>
                        <p style={{marginTop:'5rem'}}>10% of your cryptocurrency will be allocated to the FundBlock platform from
                            <br></br>your investment
                        </p>
                    </SummaryContainer2>
                </SummaryWrapper2>
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default Projects;