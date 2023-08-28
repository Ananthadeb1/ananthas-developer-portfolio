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
                        <a href="" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a href="" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn ">Buy Now</button>
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
                        <a href="" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a href="" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn ">Buy Now</button>
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
                        <a href="" className="btn btn-outline btn-warning btn-xs">live</a>
                        <a href="" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;