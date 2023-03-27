import Login from "./Login";
import { Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div className="">
            <div className="md:w-screen md:h-screen pt-20 lg:pt-16 md:flex md:items-center md:justify-center">
                <div className="flex md:h-[35rem] md:w-full md:max-w-5xl mx-1.5 rounded-md overflow-auto md:shadow-xl">
                    <div style={{ backgroundImage: 'url("/photo1.jpg")' }} className="hidden md:block md:h-full w-7/12 bg-center bg-cover flex-shrink-0">
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Account;