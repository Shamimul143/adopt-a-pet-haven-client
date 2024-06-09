import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/home/Home";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import PetListing from "../pages/petListing/PetListing";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddPet from "../pages/dashboard/AddPet";
import MyAddedPets from "../pages/dashboard/MyAddedPets";
import UpdateItem from "../pages/dashboard/UpdateItem";
import CreateDonationCam from "../pages/dashboard/CreateDonationCam";
import MyDonationCampaigns from "../pages/dashboard/MyDonationCampaigns";
import EditDonation from "../pages/dashboard/EditDonation";
import MyDonations from "../pages/dashboard/MyDonations";
import AdoptionRequest from "../pages/dashboard/AdoptionRequest";
import AllUser from "../pages/dashboard/AllUser";
import AllPets from "../pages/dashboard/AllPets";
import AllDonations from "../pages/dashboard/AllDonations";
import DonationCampaignsPage from "../pages/donationCampaignsPage/DonationCampaignsPage";
import PetDetails from "../pages/petListing/PetDetails";
import CreateAdopt from "../pages/petListing/CreateAdopt";
import DonationDetails from "../pages/donationCampaignsPage/DonationDetails";
import Payment from "../pages/donationCampaignsPage/Payment";
import PatmentHistory from "../pages/donationCampaignsPage/PatmentHistory";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/petListing",
                element: <PetListing></PetListing>,
                // loader: () => fetch('http://localhost:5000/pets')
            },
            {
                path: "/petDeteils/:id",
                element: <PetDetails></PetDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/pets/${params.id}`)
            },
            {
                path: "/createAdopt/:id",
                element: <CreateAdopt></CreateAdopt>,
                loader: ({ params }) => fetch(`http://localhost:5000/pets/${params.id}`)
            },
            {
                path: "/donationCampaignsPage",
                element: <DonationCampaignsPage></DonationCampaignsPage>             
            },
            {
                path: "/donationDetails/:id",
                element: <DonationDetails></DonationDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/donations/${params.id}`)             
            },           
            {
                path: "/payment/:id",
                element: <Payment></Payment>,
                          
            },
        
        ],

    },
    // narmal users
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'addPet',
                element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path: 'myAddedPets',
                element: <PrivateRoute><MyAddedPets></MyAddedPets></PrivateRoute>
            },
            {
                path: 'updateItem/:id',
                element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/pets/${params.id}`)

            },
            {
                path: 'CreateDonationCampaign',
                element: <PrivateRoute><CreateDonationCam></CreateDonationCam></PrivateRoute>,


            },
            {
                path: 'myDonationCampaigns',
                element: <PrivateRoute><MyDonationCampaigns></MyDonationCampaigns></PrivateRoute>,


            },
            {
                path: 'editDonation/:id',
                element: <EditDonation></EditDonation>,
                loader: ({ params }) => fetch(`http://localhost:5000/donations/${params.id}`)

            },
            {
                path: 'myDonations',
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
            },
            {
                path: 'adoptionRequest',
                element: <PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>,
            },
            {
                path: 'allUser',
                element: <PrivateRoute><AllUser></AllUser></PrivateRoute>,
            },
            {
                path: 'allPets',
                element: <PrivateRoute><AllPets></AllPets></PrivateRoute>,
            },
            {
                path: 'allDonations',
                element: <PrivateRoute><AllDonations></AllDonations></PrivateRoute>,
            },
            {
                path: "patmentHistory",
                element: <PatmentHistory></PatmentHistory>
                         
            },
        ]

    }
]);  