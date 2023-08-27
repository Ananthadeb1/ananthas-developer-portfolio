import AboutMe from "../Sections/AboutMe/AboutMe";
import Banner from "../Sections/Banner/Banner";
import ContactMe from "../Sections/ContactMe/ContactMe";
import Skills from "../Sections/Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;