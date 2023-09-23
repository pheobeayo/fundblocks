import React from "react";
import {
    CreationParent,
    CreationWrapper,
    FooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper,
    Button
} from "./createproject.styles";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import FormTextInput from "../../components/custom-input/FormTextInput";






const ProjectCreation = () => {
    
    


    return (
        <CreationParent>
            <CreationWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                <FormHeader>
                            <h3>PROJECT CREATION</h3>

                            <img src={arrow} alt="arrow" />
                            <p>Create a new project by filling out the form below</p>
                        </FormHeader>
                    <form>
                        

                        <FormTextInput
                            labelName="Project title"
                            placeholder="A catchy and descriptive name for your project"
                            name="projectTitle"

                        />
                         <FormTextInput
                            labelName="Project category"
                            placeholder="The category of your project. E.g Blockchain, AI, Robotic, etc"
                            name="projectCategory"

                        />
                        <FormTextInput
                            labelName="Funding goals"
                            placeholder="Specify the amount of funded needed to complete the project"
                            name="fundingGoals"

                        />
                        
                        <FormTextInput
                            labelName="Cryptocurrency of choice"
                            placeholder="This platform accepts Matic, Ethereum, & other Polygon-compatible tokens "
                            name="cryptocurrencyChoice"

                        />
                        <FormTextInput
                            labelName="Project timeline"
                            placeholder="Duration needed to complete the project with deadlines and milestones"
                            name="projectTimeline"

                        />
                        <FormTextInput
                            labelName="Team background"
                            placeholder="Brief background of team members; their qualifications & experience"
                            name="teamBackground"
                            height="5rem"

                        />
                        <FormTextInput
                            labelName="Roadmap"
                            placeholder="A plan of action highlighting the key stages of the project"
                            name="projectImpact"
                            height="5rem"

                        />
                        <FormTextInput
                            labelName="Reward for the Investors"
                            placeholder="What do investors stand to gain"
                            name="rewards"
                           

                        />
                       
                       
<Button>Create Project</Button>



                    </form>

                    
                    <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
                </Wrapper>
            </CreationWrapper>
        </CreationParent>

    );
};

export default ProjectCreation;