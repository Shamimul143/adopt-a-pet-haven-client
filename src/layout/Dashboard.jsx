import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import NavMenu from "../pages/shared/NavMenu";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400 text-black py-10">
                <ul className="menu p-4">
                    <li><NavLink to='/dashboard/addPet'> Add a pet</NavLink></li>
                    <li><NavLink to='/dashboard/myAddedPets'> My added pets</NavLink></li>
                    <li><NavLink to='/dashboard/AdoptionRequest'> Adoption Request</NavLink></li>
                    <li><NavLink to='/dashboard/CreateDonationCampaign'> Create Donation Campaign </NavLink></li>
                    <li><NavLink to='/dashboard/myDonationCampaigns'> My Donation Campaigns </NavLink></li>
                    <li><NavLink to='/dashboard/myDonations'> My Donations</NavLink></li>

                    <div className="divider"></div>
                    {/* sheired nav link */}
                    {isAdmin && <> <li><NavLink to='/dashboard/allUser'>  All user</NavLink></li>
                        <li><NavLink to='/dashboard/allPets'> All Pets</NavLink></li>
                        <li><NavLink to='/dashboard/allDonations'> All Donations</NavLink></li>
                    </>
                    }
                </ul>
            </div>
            {/* dashboard contant */}
            <div className="flex-1 p-8">
                <NavMenu></NavMenu>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;