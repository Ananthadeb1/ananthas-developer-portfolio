import { FaFacebookSquare, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="border-t-2 border-[#e1a34c65]"></div>
            <footer className="footer p-10 bg-[#131F33] text-neutral-content">
                <div>
                    <h1 className="text-3xl font-bold">Anantha.</h1>
                    <p>A passionate web developer<br />Learning and practicing web development since last 1 year. </p>
                </div>
                <div>
                    <span className="footer-title">My profiles</span>
                    <div className="grid grid-cols-3 gap-3">
                        <a href="https://www.linkedin.com/in/anantha-debnath-09168b177/" target="blank"><FaLinkedin className="hover:text-[#E1A34C] text-3xl"></FaLinkedin></a>

                        <a href="https://github.com/Ananthadeb1" target="blank"><FaGithub className="hover:text-[#E1A34C] text-3xl"></FaGithub></a>

                        <a href="https://www.facebook.com/Anantha.debnath.420/" target="blank"><FaFacebookSquare className="hover:text-[#E1A34C] text-3xl"></FaFacebookSquare></a>
                    </div>

                </div>
            </footer>
        </div>
    );
};

export default Footer;