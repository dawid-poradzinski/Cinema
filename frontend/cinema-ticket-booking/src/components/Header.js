import { IconMovie, IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="fixed w-full p-1.5">
            <div className="flex px-5 w-full h-16 lg:h-20 bg-zinc-800/80 items-center rounded-md backdrop-blur-md">
                <div className="w-1/3 lg:w-fit lg:order-2 lg:mr-4">
                    <div className="w-fit">
                        <Link to={`repertoire`}>
                            <div className="flex w-fit space-x-1.5 p-1 sm:py-1.5 sm:pl-2 sm:pr-3 items-center rounded transition duration-300 hover:brightness-[1.15] bg-gradient-to-br from-pink-500 to-yellow-500 shadow-md shadow-yellow-700">
                                <IconMovie size="30" />
                                <p className="hidden sm:block">Repertuar</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-1/3 lg:flex-grow text-center lg:text-left text-2xl lg:text-4xl lg:order-1">
                    <Link to={`/`}>Kino</Link>
                </div>
                <div className="w-1/3 lg:w-fit lg:order-3">
                    <div className="w-fit ml-auto">
                        <Link to={`account`}>
                            <div className="flex items-center w-fit space-x-1.5 p-1 sm:py-1.5 sm:pl-2 sm:pr-3 rounded bg-zinc-700/50 transition duration-300 hover:bg-zinc-700/90 hover:shadow-xl">
                                <IconUserCircle size="30" />
                                <p className="hidden sm:block">Zaloguj się</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Header;