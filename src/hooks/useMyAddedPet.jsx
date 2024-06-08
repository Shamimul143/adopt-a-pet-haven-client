
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useMyAddedPet = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, data: myAddedPet = [] } = useQuery({
        queryKey: ['myAddedPet', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/useMyAddedPet/${user?.email}`)
            return res.data
        }
    })
    return [myAddedPet, refetch]
};

export default useMyAddedPet;