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

                        <p className="py-6 text-xl text-[#7D838E]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste error, exercitationem hic laudantium, vel voluptas maiores distinctio quae nisi quasi magni consectetur autem beatae similique mollitia rem repellendus quos commodi reiciendis minima accusamus amet! Dolorem sapiente provident, ab, officiis quidem facilis reiciendis amet, officia harum praesentium aperiam incidunt totam quam!</p>
                        <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#424C5C] border-none text-white hover:bg-[#E1A34C]">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;