import { useLoaderData } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";

const PetDetails = () => {
    const pet = useLoaderData();
    console.log(pet);
    const { petImage, petName,petCategory, petAge, petLocation,shortDescription, longDescription } = pet;
    return (
        <div className="flex justify-center my-10 h-svh ">  
          <Card className="w-1/2">
                <CardHeader floated={false} className="h-80">
                    <img src={petImage} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    <span className="font-bold">Pet Name: </span> {petName}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                    <span className="font-bold">Long Description: </span> {petCategory}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Pet Age:</span> {petAge}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Pet Location: </span> {petLocation}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Short Description: </span>{shortDescription}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                    <span className="font-bold">Long Description: </span> {longDescription}
                    </Typography>
                </CardBody>
                <div className='flex justify-center items-center mb-5 mx-10'>
                    <button className='w-full px-2 py-2 bg-green-400 rounded-lg text-white '>Adopt</button></div>
            </Card>
        </div>
    );
};

export default PetDetails;