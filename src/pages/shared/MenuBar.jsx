import image from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom";


const MenuBar = () => {

    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/petListing'>Pet Listing</NavLink></li>
        <li><NavLink to='/donationCampaigns'>Donation Campaigns</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>




    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <a className="w-24"><img src={image} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[10] menu p-1 shadow bg-base-100 rounded-box">
                        <li><a>Dashboard</a></li>
                        <li><a>LogOut</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;