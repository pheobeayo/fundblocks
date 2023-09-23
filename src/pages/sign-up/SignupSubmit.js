import React, { useState } from "react";
import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader,
    SecondWrapper,
    
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import rectangle from "../../assets/rectangle.png";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import Checkbox from "../../components/checkbox/Checkbox";







const SignupSubmit = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };




    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Profile Picture"
                            placeholder="Drag and drop or Select file from computer
                            Pictures (in jpeg or png format only)"
                            name="addPicture"

                        />
                        <FormTextInput
                            labelName="Company’s name and Description"
                            placeholder="Enter company’s name here and add a description"
                            name="description"

                        />

                        <FormTextInput
                            labelName="Biography"
                            placeholder="Add a bio"
                            name="biography"

                        />
                        
                        <FormTextInput
                            labelName="Project title and Description"
                            placeholder="Enter project title and description"
                            name="description"

                        />
                        
                                <FormTextInput
                                    labelName="Social media link"
                                    placeholder="Add your social media links"
                                    name="links"

                                />
                            
                               
                           
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept our Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />
                        <FormButton
                            text="Create an account"
                            color="#121113"
                            borderColor="#B6116B"

                        />

                        

                    </form>
                    <SecondWrapper><h1>An impeccably curated
                        <br></br>decentralized
                        <br></br>crowdfunding platform
                        <br></br>catering to tech startups</h1>
                    <h2><img src={rectangle} alt='rectangle' />Fundraising campaigns</h2>
                    <p>A platform for tech startup to create fundraising campaign
                        <br></br>and accept contributions in cryptocurrency directly
                        <br></br>from investors.</p>
                    <h2><img src={rectangle} alt='rectangle' />Fundraising goals</h2>
                    <p>Ability for startups to set fundraising goals and deadlines,
                        <br></br>track the progress of their campaign and communicate
                        <br></br>with their supports. </p>

                    <h2><img src={rectangle} alt='rectangle' />Secure Payment system</h2>
                    <p>A payment system that enables investors to contribute
                        <br></br>cryptocurrency to the campaign and receive tokens or
                        <br></br>other rewards in return.</p>
                        
                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#121113' }}>Sign in</Link></p></SecondWrapper>

                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default SignupSubmit;