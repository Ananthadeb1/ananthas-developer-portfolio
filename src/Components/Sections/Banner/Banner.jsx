import Typewriter from 'typewriter-effect';
import myImg from '../../../../public/home_wallpaper.png';
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={myImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='sm:ml-10'>
                        <h1 className="text-5xl font-bold inline">I am a 
                        </h1>
                            <div className='text-[#E1A34C] text-5xl font-bold inline'>
                            <Typewriter
                                options={{
                                    strings: ['React Developer_', 'MERN Stack Developer_'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </div>

                        <p className="py-6 text-xl text-[#7D838E]">Transforming Ideas into Exceptional Digital Experiences with MERN Stack Expertise.</p>
                        <a target="blank" href="https://www.linkedin.com/in/anantha-debnath/" className="btn bg-[#424C5C] border-none text-white hover:bg-[#E1A34C]">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;