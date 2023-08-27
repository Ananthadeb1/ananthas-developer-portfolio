import devgif from '../../../../public/dev.gif';
const AboutMe = () => {
    return (
        <div>
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- I n t r o d u c t i o n</p>
                <h1 className='text-5xl font-bold  '>Overview</h1>
            </div>
            <div className="hero max-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={devgif} className="max-w-sm rounded-lg shadow-2xl " />
                    <div className='sm:mr-10'>
                        <h1 className="text-4xl font-bold">Hey this is Anantha Debnath</h1>
                        <p className="py-6 text-xl text-[#7D838E]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#424C5C] border-none text-white hover:bg-[#E1A34C]">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;