import React from "react";
import {
    HeroContainer,
} from "./home.styles";
import Navbar from "../../components/navbar/index";
import landingimage from "../../assets/landingimage.png";
import Welcome from "../../components/welcome/Welcome";
import OngoingProjects from "../../components/ongoing-projects/OngoingProjects";
import FundedProjects from "../../components/funded-projects/FundedProjects";
import Testimonials from "../../components/testimonials/Testimonials";
import Projects from "../../components/projects/Projects";
import Crypto from "../../components/crypto/Crypto";
import Subfooter from "../../components/sub-footer/Subfooter";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";









const Home = () => {






    return (
        <main className='bg-[#121113]'>
            <div className="mx-8 pt-16">
                <Navbar />
            </div>
            <section className='w-[90%] md:w-[95%]  py-4 '>

                <h1 className='text-[30px] md:text-[56px] font-bold capitalize py-5 text-white mx-8' >Revolutionizing Tech <br></br><span className='text-white'> Startup Financing</span> </h1>
                <h3 className='text-[18px] md:text-[22px] text-white mx-8'>Unleash the Potential of Your Startup with Decentralized
                    <br></br>Funding and Support</h3>
                <div className="flex-justify-item-centre mt-4 mx-8">
                    <Link to='/create-project' style={{ textDecoration: 'none', color: 'black' }}>  <button class="bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                        Launch Project    </button></Link>
                    <Link to='/project-details' style={{ textDecoration: 'none', color: 'white' }}>  <button class="bg-[#121113] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#5DE4F7] rounded">
                        Explore more    </button></Link>
                </div>

                <HeroContainer><img src={landingimage} alt="landingimage" /></HeroContainer>

                <div className="mt-80 justify-center">
                    <Welcome />
                </div>
                <div className="justify-center pr-6">
                    <OngoingProjects />

                </div>
                <FundedProjects />
                <Testimonials />
                <Projects />
                <Crypto />
                <Subfooter />
                <Footer />
            </section>
        </main>


    )



}


export default Home;