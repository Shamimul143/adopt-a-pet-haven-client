
import { Outlet } from 'react-router-dom';
import MenuBar from '../pages/shared/MenuBar';





const Root = () => {
    return (
        <div>
       <MenuBar></MenuBar>
            <div className='max-w-7xl mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;