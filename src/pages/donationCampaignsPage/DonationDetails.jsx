import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const DonationDetails = () => {
    const {image,petName,amount,_id}=useLoaderData();
    return (
        <div className="flex justify-center">
      
                <Card className="w-1/2 ">
                    <CardHeader floated={false} className="h-80">
                        <img src={image} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {petName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            {amount}
                        </Typography>

                    </CardBody>
                    <Link to={`/payment/${_id}`}><div className='flex justify-center items-center mb-5 mx-10'><button className='w-full px-2 py-2 bg-green-400 rounded-lg text-white '>Donate Now</button></div></Link>
                    
                </Card>
        
        </div>
    );
};

export default DonationDetails;