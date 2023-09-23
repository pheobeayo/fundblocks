import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    
    
} from "./testimonials.styles";
import arrow from "../../assets/arrow.png";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";







const Testimonials = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Testimonials</h2>
                    <img src={arrow} alt="arrow" />
                    <h3>Get inspired straight from the source</h3>
                </Header>

                <SummaryContainer1>
                   <img src={testimonial1} alt="testimonial1" />
                    <img src={testimonial2} alt="testimonial2"/>
                    <img src={testimonial3} alt="testimonial3" />
                </SummaryContainer1>
               
                
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default Testimonials;