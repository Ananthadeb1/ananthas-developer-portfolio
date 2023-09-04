import { useLoaderData } from "react-router-dom";

const ProjectsDetails = () => {
    const data = useLoaderData();
    return (
        <div className="mx-2">
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- w o r k  S a m p l e</p>
                <h1 className='text-5xl font-bold  '>Projects Details</h1>
            </div>
            <div className="grid  grid-cols-2 gap-2  place-items-center">
                <div className=" w-full border-4 border-[#E1A34C]">
                    <figure><img src={data.img1} alt="Shoes" className="object-cover h-full"/></figure>
                </div>
                <div className=" w-full  border-4 border-[#E1A34C]">
                    <figure><img src={data.img2} alt="Shoes" className="object-cover h-full"/></figure>
                </div>
                <div className=" w-full  border-4 border-[#E1A34C]">
                    <figure><img src={data.img3} alt="Shoes" className="object-cover h-full"/></figure>
                </div>
                <div className=" w-full  border-4 border-[#E1A34C]">
                    <figure><img src={data.img4} alt="Shoes" className="object-cover h-full"/></figure>
                </div>
            </div>
            <div className="">
                 <h1 className="text-3xl font-bold my-5 text-center">{data.name}</h1>
                 <p className="text-xl sm:px-10 text-center">{data.overview}</p>
                 <h1 className="text-2xl my-2">Links:</h1>
                 <div>
                    <a target='blank' href={data.live} className="btn mr-5 btn-sm bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">live
                    </a>
                    <a target='blank' href={data.client} className="btn mr-5 btn-sm bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Clint Code
                    </a>
                    <a target='blank' href={data.server} className="btn mr-5 btn-sm bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Server Code
                    </a>
                 </div>
            </div>
        </div>
    );
};

export default ProjectsDetails;