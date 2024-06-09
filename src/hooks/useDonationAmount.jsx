import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useDonationAmount = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: donationAmount = [] } = useQuery({
        queryKey: ['donation', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/donation')
            return res.data
        }
    })
    return [donationAmount, refetch]
};

export default useDonationAmount;