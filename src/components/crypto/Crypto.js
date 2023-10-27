import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header
} from "./crypto.styles";
import arrow from "../../assets/arrow.png";
import partners from "../../assets/partners.png";








const Crypto = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Cryptocurrency Token</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Cryptocurrency tokens the platform accepts</h3>
                </Header>
                <p>Matic, Ethereum, and other Polygon-compatible tokens</p>
                <Header><h2>Our Partners</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Meet our well renowned and regonised partners</h3>
                </Header>
               
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-y-10 flex-wrap lg:gap-14 xl:gap-20"> <img src={partners} alt="partners"  width="70%" style={{marginLeft:'15rem'}}/></div>

            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default Crypto;