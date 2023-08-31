/* eslint-disable react/no-unescaped-entities */
import img1 from "../../../../public/project-1/1.png"
import img2 from "../../../../public/project-2/1.png"
import img3 from "../../../../public/project-3/1.png"
const Projects = () => {
    return (
        <div className="mb-10">
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- w o r k s</p>
                <h1 className='text-5xl font-bold  '>Projects</h1>
            </div>
            <div className="sm:grid sm:grid-cols-3 place-items-center gap-40">
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Witchery</h2>
                        <ul className="list-inside list-disc">
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes ?</li>
                        </ul>
                        <div className="flex justify-between">
                        <a target="blank" href="https://assignment-12-summer-school.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a target="blank" href="https://github.com/Ananthadeb1/summer-camp-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">My Resume</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy House</h2>
                        <ul className="list-inside list-disc">
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes ?</li>
                        </ul>
                        <div className="flex justify-between">
                        <a target="blank" href="https://toy-house-f433d.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a target="blank" href="https://github.com/Ananthadeb1/toy-marketplace-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">My Resume</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">chef's World</h2>
                        <ul className="list-inside list-disc">
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes?</li>
                            <li>If a dog chews shoes whose shoes ?</li>
                        </ul>
                        <div className="flex justify-between">
                        <a target="blank" href="https://chafe-assignment-10.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a target="blank" href="https://github.com/Ananthadeb1/chef-recipe-hunter-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <a target="blank" href="https://drive.google.com/file/d/1zKoeJe3X73OHh6-maTYQhdtBJztrZ0qs/view?usp=sharing" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;