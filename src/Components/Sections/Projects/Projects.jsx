
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";

/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
    // const data = useLoaderData();
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('https://anantha-developer-portfolio-server.vercel.app/projects')
        .then(res=>res.json())
        .then(res => setDatas(res))
    },[])
    return (
        <div className="mb-10">
            <div className='text-center pb-10'>
                <p className='text-[#E1A34C]  uppercase pb-2'>-- w o r k s</p>
                <h1 className='text-5xl font-bold  '>Projects</h1>
            </div>
            <div className="sm:grid sm:grid-cols-3 flex flex-col justify-center place-items-center sm:gap-40">
                {
                    datas.map((data)=>(
                        <SingleProject 
                        key={data.id} 
                        data={data}></SingleProject>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;