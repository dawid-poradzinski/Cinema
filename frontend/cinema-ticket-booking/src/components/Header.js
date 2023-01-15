import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="flex justify-around w-full h-14 bg-gray-700 items-center">
            <Link to={`repertoire`}>Repertuar</Link>
            <Link to={`/`}>Kino</Link>
            <Link to={`account`}>Konto</Link>
        </div>
     );
}
 
export default Header;