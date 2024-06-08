
import { useState } from "react";
import useMyAddedPet from "../../hooks/useMyAddedPet";



const AdoptionRequest = () => {
    const [myAddedPet] = useMyAddedPet();  
const [adoptionStatus, setAdoptionStatus]=useState();

    
    return (
        <div className="overflow-x-scroll overflow-y-scroll h-svh sm:w-[300px] md:w-[700px] lg:w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Number
                        </th>
                        <th>Pet image</th>
                        <th>Pet name</th>
                        <th>Pet category</th>
                        <th>Name</th>
                        <th>Email</th>                      
                        <th>Adoption Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAddedPet.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.petImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.petName}</td>
                            <td>{item.petCategory}</td>                        
                            <td>{item.name}</td>                        
                            <td>{item.email}</td>                                              
                            <th><button onClick={() => setAdoptionStatus(!adoptionStatus)}  className="bg-green-300 px-4 py-2 rounded-lg">{adoptionStatus ? "Reject" : "Accept"}</button></th>                      

                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdoptionRequest;