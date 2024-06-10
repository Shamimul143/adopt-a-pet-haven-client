

import useMyAddedPet from "../../hooks/useMyAddedPet";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const AdoptionRequest = () => {
    const [myAddedPet, refetch] = useMyAddedPet();
    // const [adoptionStatus, setAdoptionStatus]=useState();
    const axiosPablic = useAxiosPublic();

    const handleStatus = (item) => {
        item.status = "aprove"
        axiosPablic.patch(`/adoptions/${item._id}`, item)
            .then(res => {
                if (res.data.modifiedCount > 0 || res.data.modifiedCount == undefined) {
                    refetch()
                }

            })


    }
    const handleStatus2 = async (item) => {

        item.status = "panding"
        const res = await axiosPablic.patch(`/adoptions/${item._id}`, item)
        if (res.data.modifiedCount > 0) {
            refetch()
        }


    }



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
                        <th>Phone Number</th>
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
                            <td>{item.phoneNumber}</td>
                            <td>{item.status}</td>
                            <th>
                                <div>
                                    {
                                        item.status === 'panding' ?

                                            <button onClick={() => handleStatus(item)} className="bg-green-400 py-2 px-4 rounded-lg" >Approved</button> :
                                            <button onClick={() => handleStatus2(item)} className="bg-green-400 py-2 px-4 rounded-lg">Rejected</button>
                                    }


                                </div>
                            </th>

                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdoptionRequest;