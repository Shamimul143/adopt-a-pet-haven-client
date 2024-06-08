
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllDonations = () => {

    const axiosPublic = useAxiosPublic()
   
    const { data: allDonations = [], isPending: loading, refetch } = useQuery({
        queryKey: ['alldonations'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donation');
            return res.data
        }
    })
   
    return [allDonations, refetch,loading]
};

export default useAllDonations;