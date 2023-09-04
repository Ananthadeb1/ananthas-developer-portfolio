/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleProject = ({data}) => {
    return (
        <div className="card w-96 my-5 shadow-xl bg-[#3e4757]">
                    <figure><img src={data.mainimg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <ul className="list-inside list-disc">
                            <li>{data.feater[0]}</li>
                            <li>{data.feater[1]}</li>
                            <li>{data.feater[2]}</li>
                        </ul>
                        <div className="flex justify-between">
                            <a target="blank" href={data.live} className="btn btn-outline btn-warning btn-xs">live</a>
                            <a target="blank" href={data.client} className="btn btn-outline btn-warning btn-xs">code</a>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <Link to="/" className="btn bg-[#E1A34C]  border-none text-white hover:bg-[#424C5C]">Details</Link>
                        </div>
                    </div>
                </div>
    );
};

export default SingleProject;