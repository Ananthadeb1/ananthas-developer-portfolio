/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
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
            <div className="sm:grid sm:grid-cols-3 flex flex-col items-center gap-40">
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">The Witchery</h2>
                        <ul className="list-inside list-disc">
                            <li>Users can do course in their free time.</li>
                            <li>Users can select course and post a course to teach.</li>
                            <li>There is an admin role and admin can control users.</li>
                        </ul>
                        <div className="flex justify-between">
                            <a target="blank" href="https://assignment-12-summer-school.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                            <a target="blank" href="https://github.com/Ananthadeb1/summer-camp-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <Link to="/" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Toy House</h2>
                        <ul className="list-inside list-disc">
                            <li>User can see toy as tab then see the details in another page also can see some extraordinary banners.</li>
                            <li>Users can post toy for selling.</li>
                            <li>Users can see te all toy list included their posted toy.</li>
                        </ul>
                        <div className="flex justify-between">
                            <a target="blank" href="https://toy-house-f433d.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                            <a target="blank" href="https://github.com/Ananthadeb1/toy-marketplace-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <Link to="/" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">chef's World</h2>
                        <ul className="list-inside list-disc">
                            <li>This website has responsive design and attractive outlook.</li>
                            <li>users can can logIn and sign up with email and google.</li>
                            <li>Users can see the chefs and their recipes in the another page.</li>
                        </ul>
                        <div className="flex justify-between">
                            <a target="blank" href="https://chafe-assignment-10.web.app/" className="btn btn-outline btn-warning btn-xs">live</a>
                            <a target="blank" href="https://github.com/Ananthadeb1/chef-recipe-hunter-client-side" className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <Link to="/" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;