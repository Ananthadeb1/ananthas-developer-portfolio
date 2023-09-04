import {  useLoaderData } from "react-router-dom";

const ProjectsDetails = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- w o r k  S a m p l e</p>
                <h1 className='text-5xl font-bold  '>Projects Details</h1>
            </div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default ProjectsDetails;