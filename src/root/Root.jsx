
import { Outlet } from 'react-router-dom';
import NavMenu from '../pages/shared/NavMenu';





const Root = () => {
    return (
        <div>
            <NavMenu></NavMenu>    
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;