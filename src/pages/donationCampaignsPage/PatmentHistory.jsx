import {useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const PatmentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payment = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            return res.data;
        }
    })
console.log(payment);

    return (
        <div className="overflow-x-scroll overflow-y-scroll h-svh sm:w-[300px] md:w-[700px] lg:w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            SL
                        </th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>TransactionId</th>                     
                    </tr>
                </thead>
                <tbody>
                    {
                        payment.map((item, index) => <tr key={item._id}>
                            <th>
                                {index + 1}
                            </th>                        
                            <td>{item.email}</td>
                            <td>{item.price}</td>                        
                            <td>{item.transactionId}</td>                        
                          
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PatmentHistory;