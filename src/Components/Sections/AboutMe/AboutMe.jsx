import devgif from '../../../../public/dev.gif';
const AboutMe = () => {
    return (
        <>
            <div className='mb-10'>
                <div className='text-center pb-10'>
                    <p className='text-[#E1A34C]  uppercase pb-2'>-- I n t r o d u c t i o n</p>
                    <h1 className='text-5xl font-bold'>Overview</h1>
                </div>
                <div className="hero max-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={devgif} className="max-w-sm rounded-lg shadow-2xl " />
                        <div className='sm:mr-10'>
                            <h1 className="text-4xl font-bold">Hey this is Anantha Debnath</h1>
                            <p className="py-6 text-xl text-[#7D838E]">My passion lies in creating user-friendly web applications that blend creativity with technical excellence. With a focus on responsive design and robust back-end development, I'm dedicated to delivering high-quality solutions for engaging user experiences.</p>
                            <a target="blank" href="https://drive.google.com/file/d/1yYRapUfRPEsBFnLxGq1lVVVOlghW-AHd/view?usp=sharing" className="btn bg-[#424C5C] border-none text-white hover:bg-[#E1A34C]">Download cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;