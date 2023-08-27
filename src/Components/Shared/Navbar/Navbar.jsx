import { NavLink } from "react-router-dom";


const navOptions = (
    <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl' : 'mx-4 text-xl'}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/aboutme" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl' : 'mx-4 text-xl'}>About Me</NavLink>
        </li>
        <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl ' : 'mx-4 text-xl'}>Skills</NavLink>
        </li>
        <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl' : 'mx-4 text-xl'}>Projects</NavLink>
        </li>
        <li>
            <NavLink to="/contactme" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl' : 'mx-4 text-xl'}>Contact</NavLink>
        </li>
        <li>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-[#E1A34C] font-bold mx-4 text-xl' : 'mx-4 text-xl'}>Blogs</NavLink>
        </li>
    </>
);

const Navbar = () => {
    return (
        <div>
            <div className=" navbar bg-[#131F33] text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            className=" menu-sm dropdown-content mt-3  z-[1] p-2 shadow bg-[#131F33] rounded-box w-52 "
                        >
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-bold  sm:block">Anantha.</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu-horizontal px-1 ">
                        {navOptions}
                    </ul>
                </div>
                    <div className="navbar-end">
                        <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#424C5C] border-none text-white hover:bg-[#E1A34C]">My Resume</a>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;