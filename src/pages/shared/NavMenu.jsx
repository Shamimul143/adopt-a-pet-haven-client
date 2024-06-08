import image from '../../assets/images/logo.png'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
const NavMenu = () => {
    const { user, logOut } = useAuth()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Navigate("/login")
                toast.success("Logout successfully");
            })
    }
    const link = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/petListing'>Pet Listing</NavLink></li>
        <li><NavLink to='/donationCampaignsPage'>Donation Campaigns</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signUp'>SignUp</NavLink></li>
    </>

    return (
        <div >
            <Navbar fluid rounded className="max-w-6xl mx-auto my-5">
                <Navbar.Brand href="/">
                    <img className="w-24" src={image} alt="" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img={user?.photoURL
                            } rounded />
                        }
                    >
                        <Dropdown.Header>

                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item><Link to='/dashboard'>Dashboard</Link></Dropdown.Item>
                        <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse >
                    <Navbar.Link className='sm:flex-row lg:flex gap-3 ' >{link}</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavMenu;