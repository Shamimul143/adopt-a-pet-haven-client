import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useDonation = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: donation = [] } = useQuery({
        queryKey: ['donation', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/donation/${user?.email}`)
            return res.data
        }
    })
    return [donation, refetch]
};

export default useDonation;