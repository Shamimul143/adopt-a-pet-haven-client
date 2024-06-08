import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useMyAddedPet from "../../hooks/useMyAddedPet";



const MyAddedPets = () => {
    const [myAddedPet, refetch] = useMyAddedPet();  
    const axiosSecure = useAxiosSecure()


    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/pets/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    

    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                           SL
                        </th>
                        <th>Pet image</th>
                        <th>Pet name</th>
                        <th>Pet category</th>
                        <th>Adoption Status</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                            <th>
                                <button className=" btn-md bg-blue-gray-200 px-2 rounded"> {item.adopted}</button>
                            </th>
                            <th>
                                <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn-xs"><FaEdit className="text-red-500 text-xl"></FaEdit> </button></Link>
                            </th>
                            <th>
                                <button onClick={() => handleDeleteItem(item)} className=" btn-xs"><FaTrashAlt className="text-red-500 text-xl"></FaTrashAlt> </button>
                            </th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAddedPets;