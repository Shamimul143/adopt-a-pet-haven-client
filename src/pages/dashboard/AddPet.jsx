import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useRef, useState } from "react";
import JoditEditor from 'jodit-react';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPet = () => {

    const editor = useRef(null);
    const [content, setContent] = useState("");

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
                petImage: res.data.data.display_url,
                petName: data.petName,
                petAge: data.petAge,
                petCategory: data.petCategory,
                petLocation: data.petLocation,
                adoptDateTime: data.adoptDateTime,
                adopted: data.adopted,
                shortDescription: data.shortDescription,
                longDescription:JSON.stringify(content),
                email: user.email,
                name: user.displayName,
                userimage: user.photoURL
            }
            // 
            const petRes = await axiosSecure.post('/pets', petItem);
            console.log(petRes.data);
            if (petRes.data.insertedId) {
                // show popup success
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.petName} is added to the menu`,
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
                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Pet name *</span>
                            </div>
                            <input type="text" placeholder="Pet name" {...register('petName', { required: true })} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Pet location, *</span>
                            </div>
                            <input type="text" placeholder="Pet location," {...register('petLocation', { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Adopt Date time, *</span>
                            </div>
                            <input type="datetime-local" placeholder="Adopt date time," {...register('adoptDateTime', { required: true })} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Adopted, *</span>
                            </div>
                            <input type="text" defaultValue={false} placeholder="Adopted" {...register('adopted', { required: true })} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Pet Category *</span>
                            </div>
                            <select defaultValue="default" {...register("petCategory")} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Rabbit">Rabbit</option>
                            </select>
                        </label>


                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Pet age *</span>
                            </div>
                            <input type="text" placeholder="Pet Age" {...register('petAge', { required: true })} className="input input-bordered w-full" />
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
                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={(newContent) => setContent(newContent)}
                        />
                        {/* <textarea {...register('longDescription')} className="textarea textarea-bordered h-24" placeholder="Long description"></textarea> */}
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn"> Add Pet</button>
                </form>
            </div>
        </div>
    );
};

export default AddPet;