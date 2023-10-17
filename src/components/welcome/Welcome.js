import React from "react";
import {
    WelcomeParent,
    WelcomeWrapper,
    SummaryCard,
    SummaryContainer,
    Header,
    LButton
} from "./welcome.styles";
import { Link } from "react-router-dom";







const Welcome = () => {


    return (
        <WelcomeParent>
            <WelcomeWrapper>
                <Header><h2>Welcome to FundBlock, where innovation
                    <br></br>intersects with blockchain prowess</h2>

                </Header>
                <SummaryContainer>
                    <SummaryCard >
                        <hr/>
                        <h3>Decentralization and Security</h3>
                        <p>Fundblock utilizes blockchain's
                            <br></br>decentralized architecture to enhance
                            <br></br>security.
                        </p>

                    </SummaryCard>
                    <SummaryCard>
                        <hr />
                        <h1>Global Accessibility</h1>
                        <p>By integrating blockchain, FundBlock
                            <br></br> creates a global stage for startups &
                            <br></br>  investors to engage in crowdfunding </p>
                    </SummaryCard>
                    <SummaryCard >
                        <hr/>
                        <h1>Efficiency and Speed</h1>
                        <p>Through integration with the Polygon
                         <br></br>   blockchain, FUNDBLOCK enables rapid
                          <br></br>  and streamlined transactions</p>
                    </SummaryCard>
                </SummaryContainer>
                <Link to='/create-project' style={{ textDecoration: 'none', color: 'black' }}> <LButton>Launch Project</LButton></Link>
            </WelcomeWrapper>



        </WelcomeParent>




    )





}


export default Welcome;