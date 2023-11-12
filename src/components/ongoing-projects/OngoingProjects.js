import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    SummaryCard

} from "./ongoing.styles";
import arrow from "../../assets/arrow.png";
import vira from "../../assets/vira.svg";
import auto from "../../assets/auto.svg";
import nano from "../../assets/nano.svg";
import mind from "../../assets/mind.svg";
import remote from "../../assets/remote.svg";
import cyber from "../../assets/cyber.svg";






const OngoingProjects = () => {


    return (
        <div className="container mx-auto">
            <ProjectsParent>
                <ProjectsWrapper>
                    <Header><h2>Ongoing Projects</h2>
                        <img src={arrow} alt="arrow" />
                        <h3>List of ongoing projects to invest in</h3>
                    </Header>

                    <SummaryContainer1>
                        <SummaryCard>
                            <img src={vira} alt='vira' />
                            <h3>ViraSafe</h3>
                            <p>AI-driven virus detection and prevention
                                <br></br>software for public health.</p>
                            <hr />
                            <p >Total raised <span class='mx-16 text-white'>$12,491,432</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$78,204,512</span>
                                <br></br>Starting date<span class='mx-16 text-white'>October 28</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={auto} alt='auto' />
                            <h3>AutoPilotAI</h3>
                            <p>Autonomous vehicle technology enhancing
                                <br></br>transportation safety and efficiency..</p>
                            <hr />
                            <p>Total raised <span class='mx-16 text-white'>$150,491,562</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$190,204,512</span>
                                <br></br>Starting date<span class='mx-16 text-white'>October 30</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={nano} alt='nano' />
                            <h3>NanoMedTech</h3>
                            <p>Developing nanotechnology for innovative
                                <br></br>medical diagnostics and treatments.</p>
                            <hr />
                            <p>Total raised <span class='mx-16 text-white'>$70,555,198</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$105,154,781</span>
                                <br></br>Starting date<span class='mx-16 text-white'>December 29</span>
                            </p>
                        </SummaryCard>
                    </SummaryContainer1>
                    <SummaryContainer2>
                        <SummaryCard>
                            <img src={mind} alt='mind' />
                            <h3>MindMeld</h3>
                            <p>A start-up that develops natural language
                                <br></br>processing and speech recognition technology</p>
                            <hr />
                            <p>Total raised <span class='mx-16 text-white'>$40,255,133</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$210,451,098</span>
                                <br></br>Starting date<span class='mx-16 text-white'>December 29</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={remote} alt='remote' />
                            <h3>RemoteGuard Cybersecurity</h3>
                            <p>A tech startup ensuring remote workers'
                                <br></br>cybersecurity,  and safeguarding sensitive data</p>
                            <hr />
                            <p>Total raised <span class='mx-16 text-white'>$40,255,133</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$210,451,098</span>
                                <br></br>Starting date<span class='mx-16 text-white'>December 21</span>
                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={cyber} alt='cyber' />
                            <h3>CyberSolution</h3>
                            <p>A start-up that develops cybersecurity
                                <br></br>solutions for individuals and small businesses.</p>
                            <hr />
                            <p>Total raised <span class='mx-16 text-white'>$120,491,432</span>
                                <br></br>Fundraising goal<span class='mx-10 text-white'>$180,204,512</span>
                                <br></br>Starting date<span class='mx-16 text-white'>August 29</span>
                            </p>
                        </SummaryCard>
                    </SummaryContainer2>

                </ProjectsWrapper>



            </ProjectsParent>


        </div>



    )





}


export default OngoingProjects;