import React from "react";
import {
    ButtonContainer,
    CenterWrapper,
    SubfooterParent,
    SearchBarContainer,
    SearchBarForm,
    Button,
    SubscribeContainer
} from "./subfooter.styles";



const Subfooter = () => {
    return (

        <SubfooterParent>
            <CenterWrapper>
                <SubscribeContainer>
                    <h3>Subscribe to our mailing list</h3>

                    <h4>Join our mailing list today for exclusive updates </h4>
                    <p>on this cutting-edge solution and more.</p>

                    <ButtonContainer>
                        <SearchBarContainer>
                            <SearchBarForm>
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Email Address"
                                />
                                <Button>Subscribe</Button>
                            </SearchBarForm>
                        </SearchBarContainer>


                    </ButtonContainer>
                </SubscribeContainer>

            </CenterWrapper>
        </SubfooterParent>
    )



}

export default Subfooter;