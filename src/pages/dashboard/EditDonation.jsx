import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const EditDonation = () => {
    const edititem = useLoaderData();
    console.log(edititem);
    const { petName, amount, lastDateOfDonation, storeDate, shortDescription, longDescription, _id } = edititem;
    console.log(petName, amount)
    const { register, handleSubmit, reset } = useForm();
    const axiosPablic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()

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
                petName: data.name,
                amount: data.amount,
                lastDateOfDonation: data.lastDateOfDonation,
                storeDate: data.storeDate,
                shortDescription: data.shortDescription,
                longDescription: data.longDescription


            }
            // 
            const petRes = await axiosSecure.patch(`/donation/${_id}`, petItem);
            console.log(petRes.data);
            if (petRes.data.modifiedCount > 0) {
                // show popup success
                reset();
                navigate('/dashboard/myDonationCampaigns')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'update successfully',
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
                            <input type="text" defaultValue={petName} placeholder="Name" {...register('Name', { required: true })} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Amount *</span>
                            </div>
                            <input type="text" defaultValue={amount} placeholder="Amount" {...register('amount', { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Last date of donation, *</span>
                            </div>
                            <input type="datetime-local" defaultValue={lastDateOfDonation} placeholder="Last date of donation," {...register('lastDateOfDonation', { required: true })} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Stored Date, *</span>
                            </div>
                            <input type="datetime-local" defaultValue={storeDate} placeholder="Stored Date," {...register('storeDate', { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Short description</span>
                        </div>
                        <textarea defaultValue={shortDescription} {...register('shortDescription')} className="textarea textarea-bordered h-24" placeholder="Short description"></textarea>
                    </label>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Long description</span>
                        </div>
                        <textarea defaultValue={longDescription} {...register('longDescription')} className="textarea textarea-bordered h-24" placeholder="Long description"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn">Edit Donation</button>
                </form>
            </div>
        </div>
    );
};

export default EditDonation;