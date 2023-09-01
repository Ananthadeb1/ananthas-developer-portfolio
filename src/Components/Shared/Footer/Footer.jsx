import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-10">
            <div className="border-t-2 border-[#e1a34c65]"></div>
            <footer className="footer p-10 md:justify-between text-xl justify-center text-white">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">My Self</span>
                    <Link to="/aboutme" className="link link-hover">About us</Link>
                    <Link to="/contactme" className="link link-hover">Contact</Link>
                    <Link to="/projects" className="link link-hover">Projects</Link>
                    <Link to="/skills" className="link link-hover">Skills</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t  text-white border-base-300">
                <div className="items-center grid-flow-col md:justify-self-start justify-self-center ">
                    <img src="https://img.freepik.com/premium-vector/ad-logo-design_839562-2907.jpg?w=900" alt="" className="w-16 rounded-full"/>
                    <p>Anantha Debnath <br />Web Developer</p>
                </div>
                <div className="md:place-self-center md:justify-self-end  justify-self-center">
                    <div className="grid grid-flow-col gap-4">
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