import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useDonation from "../../hooks/useDonation";
import { FaTrashAlt } from "react-icons/fa";


const MyDonations = () => {
    const [donation, refetch] = useDonation();
    const axiosSecure = useAxiosSecure()
    console.log(donation);

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
                const res = await axiosSecure.delete(`/donation/${item._id}`)
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
                            Number
                        </th>
                        <th>Image</th>
                        <th>Pet Name</th>
                        <th>Donation Amount</th>                        
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donation.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.petName}</td>
                            <td>{item.amount}</td>
                         
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

export default MyDonations;