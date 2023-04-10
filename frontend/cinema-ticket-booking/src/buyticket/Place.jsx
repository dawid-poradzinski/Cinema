import { useState } from "react";

const Place = (props) => {
    const [userReserved, setUserReserved] = useState(false);
    return ( 
        <div onClick={() => setUserReserved(!userReserved)} className={`w-10 h-10 transition duration-300  ${props.reserved === 1 ? 'bg-green-500 cursor-pointer hover:bg-yellow-500' : props.reserved === -1 ? 'bg-none' : 'bg-red-500' } ${userReserved === true ? '!bg-yellow-600' : ''}`}>
        </div>
     );
}
 
export default Place;