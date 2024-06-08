
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const PetCardDeteils = ({ item }) => {
    const { petImage, petName, petAge, petLocation,_id } = item;
    return (
        <div>
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img src={petImage} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {petName}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        {petAge}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        {petLocation}
                    </Typography>
                </CardBody>
                <Link to={`/petDeteils/${_id}`}><div className='flex justify-center items-center mb-5 mx-10'><button className='w-full px-2 py-2 bg-green-400 rounded-lg text-white '> view details</button></div></Link>
            </Card>

        </div>
    );
};

PetCardDeteils.propTypes = {
    item: PropTypes.object
};

export default PetCardDeteils;