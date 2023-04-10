import { IconArmchair } from "@tabler/icons-react";
const HourComponent = () => {
    return (
        <div className="flex py-2 px-4 space-x-2 border-2 border-orange-600 bg-orange-600/20 hover:bg-orange-600 transition duration-300 cursor-pointer shadow-md rounded-md justify-between">
            <p>10:00</p>
            <div className="flex space-x-1.5 items-center">
                <IconArmchair size={22} />
                <span className="font-bold">100</span>
            </div>
        </div>
    );
}

export default HourComponent;