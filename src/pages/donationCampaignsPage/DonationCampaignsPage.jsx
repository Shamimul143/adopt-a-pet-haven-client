import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import useAllDonations from "../../hooks/useAllDonations";
import { Link } from "react-router-dom";

const DonationCampaignsPage = () => {
    const [allDonations] = useAllDonations()

    return (
        <div className="grid grid-cols-3 gap-5">
            {allDonations.map(item => <>
                <Card className="w-96">
                    <CardHeader floated={false} className="h-80">
                        <img src={item.image} alt="profile-picture" />
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {item.petName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium" textGradient>
                            {item.amount}
                        </Typography>

                    </CardBody>
                    <Link to={`/donationDetails/${item._id}`}><div className='flex justify-center items-center mb-5 mx-10'><button className='w-full px-2 py-2 bg-green-400 rounded-lg text-white '> view details</button></div></Link>
                    
                </Card>
            </>)}
        </div>
    );
};

export default DonationCampaignsPage;