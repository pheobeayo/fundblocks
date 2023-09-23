
import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader,
    SecondWrapper
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import rectangle from "../../assets/rectangle.png";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import logo from "../../assets/logo.png";







const Signin = () => {


    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form>
                    <img src={logo} alt='logo'/>
                        <FormHeader>
                            <h3>SIGN INTO YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

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



                        <FormButton
                            text="Sign in"
                            color="#121113"
                            borderColor="#B6116B"

                        />

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#FFDAB9' }}>Sign up</Link></p>


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

            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;