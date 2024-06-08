import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateDonationCam = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPablic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const onSubmit = async (data) => {
        console.log(data)
        // image uplode to imbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPablic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const petItem = {
                image: res.data.data.display_url,
                petName:data.name,
                amount: data.amount,
                lastDateOfDonation: data.lastDateOfDonation,
                // storeDate: data.storeDate, 
                storeDate: new Date(),         
                shortDescription: data.shortDescription,
                longDescription: data.longDescription,
                email: user.email,
                name: user.displayName,
                userimage: user.photoURL
            }
            // 
            const petRes = await axiosSecure.post('/donation', petItem);
            console.log(petRes.data);
            if (petRes.data.insertedId) {
                // show popup success
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item is added to the menu seccessfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with imsge', res.data);
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-6" >
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Name *</span>
                            </div>
                            <input type="text" placeholder="Name" {...register('name', { required: true })} className="input input-bordered w-full" />
                        </label> 
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Amount *</span>
                            </div>
                            <input type="text" placeholder="Amount" {...register('amount', { required: true })} className="input input-bordered w-full" />
                        </label> 
                    </div>
                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Last date of donation, *</span>
                            </div>
                            <input type="datetime-local" placeholder="Last date of donation," {...register('lastDateOfDonation', { required: true })} className="input input-bordered w-full" />
                        </label>
                      
                    </div>  
                   
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Short description</span>
                        </div>
                        <textarea {...register('shortDescription')} className="textarea textarea-bordered h-24" placeholder="Short description"></textarea>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Long description</span>
                        </div>
                        <textarea {...register('longDescription')} className="textarea textarea-bordered h-24" placeholder="Long description"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Create Donation</button>
                </form>
            </div>
        </div>
    );
};

export default CreateDonationCam;