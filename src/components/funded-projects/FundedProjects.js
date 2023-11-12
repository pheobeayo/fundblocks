import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    SummaryCard

} from "./funded.styles";
import arrow from "../../assets/arrow.png";
import brain from "../../assets/brain.svg";
import health from "../../assets/health.svg";
import data from "../../assets/data.svg";
import robo from "../../assets/robo.svg";
import edu from "../../assets/edu.svg";
import cloud from "../../assets/cloud.svg";






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
                        <SummaryCard>
                            <img src={brain} alt='brain' />
                            <h3>BrainWave</h3>
                            <h4>0.003 ETH</h4>
                            <p>A start-up that uses neuroscience to develop
                                <br></br>AI algorithms for better decision-making.</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$3,003,212</span>
                                <br></br>Participants<span class='mx-8'>3498</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={health} alt='health' />
                            <h3>HealthBot</h3>
                            <h4>0.003 ETH</h4>
                            <p>Startup creating AI chatbots, wearables for
                                <br></br>health advice and monitoring.</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$1,231,004</span>
                                <br></br>Participants<span class='mx-8'>2232</span>

                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={data} alt='data' />
                            <h3>DataFusion</h3>
                            <h4>0.003 ETH</h4>
                            <p>Cutting-edge data integration solutions for
                                <br></br>streamlined business insights</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$9,204,512</span>
                                <br></br>Participants<span class='mx-8'>1287</span>
                            </p>
                        </SummaryCard>
                    </SummaryContainer1>
                    <SummaryContainer2>
                        <SummaryCard>
                            <img src={robo} alt='robo' />
                            <h3>RoboServe</h3>
                            <h4>0.003 ETH</h4>
                            <p>Robotics start-up focusing on automation for
                                <br></br>food and hospitality industries.</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$1,678,189</span>
                                <br></br>Participants<span class='mx-8'>789</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={edu} alt='edu' />
                            <h3>EduVirtuoso</h3>
                            <h4>0.003 ETH</h4>
                            <p>Virtual reality education platform for  and
                                <br></br>immersive interactive learning experiences.</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$9,345,004</span>
                                <br></br>Participants<span class='mx-8'>1232</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={cloud} alt='cloud' />
                            <h3>CloudLap</h3>
                            <h4>0.003 ETH</h4>
                            <p> A start-up that develops innovative virtual
                                <br></br>reality technology for educational purposes.</p>
                            <hr />
                            <p>Total raised <span class='mx-8'>$3,610,149</span>
                            <br></br>Participants<span class='mx-8'>5210</span>
                            </p>
                        </SummaryCard>
                    </SummaryContainer2>

                </ProjectsWrapper>



            </ProjectsParent>


        </div>



    )





}


export default FundedProjects;