import { Outlet } from "react-router-dom";

const Account = () => {
    return (
        <div className="pageMainDivStyle !py-0 h-screen bg-center md:bg-top" style={{backgroundImage: 'url("/settingsbg2.jpg")'}} >
            <div className="w-screen h-screen pt-20 lg:pt-28 lg:pb-5 bg-zinc-900/80 flex justify-center backdrop-blur-2xl">
                <div className="flex flex-col w-full md:max-w-5xl rounded-md bg-zinc-900/60 shadow-xl p-8">
                    <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Account;