import {
    Card,
    CardHeader,
    CardBody,
    Typography
} from "@material-tailwind/react";
import image1 from '../../../assets/images/Category/Cat.jpg'
import image2 from '../../../assets/images/Category/dog.jpg'
import image3 from '../../../assets/images/Category/Fish.jpg'
import image4 from '../../../assets/images/Category/rabit.jpg'
import image5 from '../../../assets/images/Category/manky.jpg'
import image6 from '../../../assets/images/Category/rat.webp'
import { Link } from "react-router-dom";



const Category = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-5">Pets Category </h2>
            <p className="text-center lg:w-2/3 mx-auto">Discover a variety of pets, from dogs and cats to birds, reptiles, and small mammals. Learn about their care, behavior, and unique needs to ensure a happy and healthy life for your furry, feathered, or scaled friends. Whether you are a seasoned pet owner or looking to adopt, find tips, advice, and resources to support you in providing the best environment for your companions.</p>
            <div className="grid lg:grid-cols-3 my-10">
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img className="w-full" src={image1} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Cat
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img className="w-full" src={image2} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Dog
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img className="w-full" src={image3} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Fish
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img className="w-full" src={image4} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Rabbit
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img src={image5} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Manky
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
                <Link to='#'>
                    <Card className="w-96 my-3">
                        <CardHeader floated={false} className="h-80">
                            <img src={image6} alt="profile-picture" />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Rat
                            </Typography>
                        </CardBody>
                    </Card>
                </Link>
            </div>
        </div>
    );
};

export default Category;