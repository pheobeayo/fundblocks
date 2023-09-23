import React from "react";
import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader,
   SecondWrapper
} from "./sign.up.styles";
import rectangle from "../../assets/rectangle.png";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";






const Signup = () => {

    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/signup-submit");

    };


    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <img src={logo} alt='logo' />
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="FullName"
                            placeholder="e.g Devon Lane"
                            name="fullName"

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"

                        />
                        <h4>Password must contain:</h4>
                        <p> At least 8 characters
                            <br></br>At least one number
                            <br></br>At least one lowercase letter
                            <br></br>At least one uppercase letter</p>
                        <FormTextInput
                            labelName="Wallet Address for Cryptocurrency"
                            placeholder="eg 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                            name="walletAddress"

                        />

                        <FormTextInput
                            labelName="Country of Residence"
                            placeholder="e.g India"
                            name="country"


                        />


                        <FormTextInput
                            labelName="Phone Number (optional)"
                            placeholder="+91 "
                            name="walletAddress"

                        />


                        <FormButton
                            text="Continue"
                            color="#121113"
                            borderColor="#B6116B"
                            handleClick={routeToNextPage}

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
                            <br></br>other rewards in return.</p></SecondWrapper>
                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;