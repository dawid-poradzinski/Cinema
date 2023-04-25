import { useState } from "react";

const Place = (props) => {
    const [userReserved, setUserReserved] = useState(false);
    return ( 
        <div onClick={() => setUserReserved(!userReserved)} className={`w-10 h-10 transition duration-300 rounded-sm m-0.5  ${props.reserved === 1 ? 'bg-green-500 cursor-pointer hover:bg-yellow-500 hover:scale-125' : props.reserved === -1 ? 'bg-none' : 'bg-red-900' } ${userReserved === true ? '!bg-indigo-500' : ''}`}>
        </div>
     );
}
 
export default Place;