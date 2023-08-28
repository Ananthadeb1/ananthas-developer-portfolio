const Skills = () => {
    return (
        <div >
            <div className='text-center pb-10 w-full'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- s e t - s k i l l s</p>
                <h1 className='text-5xl font-bold  '>Expertise</h1>
            </div>
            <div className="grid justify-items-center sm:flex  sm:justify-between ">

                <div className="sm:w-2/4 sm:pr-7 w-3/4">
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">100%</h1>
                            
                            <h1 className="text-xl">HTML</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A] animate" value="100" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">90%</h1>
                            <h1 className="text-xl">CSS</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="90" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">90%</h1>
                            <h1 className="text-xl">JAVASCRIPT</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="90" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">100%</h1>
                            <h1 className="text-xl">BOOTSTRAP</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="100" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">90%</h1>
                            <h1 className="text-xl">GIT</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="90" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">70%</h1>
                            <h1 className="text-xl">REDUX</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="70" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">95%</h1>
                            <h1 className="text-xl">TAILWIND CSS</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="95" max="100"></progress>
                    </div>
                </div>



                <div className=" sm:w-2/4 sm:pl-7 w-3/4">
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">95%</h1>
                            <h1 className="text-xl">DAISY UI</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="95" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">95%</h1>
                            <h1 className="text-xl">FIREBASE</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="95" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">40%</h1>
                            <h1 className="text-xl">NEXT JS</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="40" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">90%</h1>
                            <h1 className="text-xl">REACT</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="90" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">70%</h1>
                            <h1 className="text-xl">NODE JS</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="70" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">75%</h1>
                            <h1 className="text-xl">EXPRESS JS</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="75" max="100"></progress>
                    </div>
                    <div className="mb-16">
                        <div className="flex justify-between items-end">
                            <h1 className="sm:text-6xl text-xl">70%</h1>
                            <h1 className="text-xl">MONGODB</h1>
                        </div>
                        <progress className="progress progress-warning  h-1 bg-[#2D384A]" value="70" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;