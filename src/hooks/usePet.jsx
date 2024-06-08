
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePet = () => {
    

    const axiosPublic = useAxiosPublic()
   
    const { data: pet = [], isPending: loading, refetch } = useQuery({
        queryKey: ['pet'],
        queryFn: async () => {
            const res = await axiosPublic.get('/pets');
            return res.data
        }
    })
   
    return [pet, refetch, loading]
};

export default usePet;