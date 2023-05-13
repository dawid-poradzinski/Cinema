import { IconChevronRight, IconSettings, IconStar, IconTicket, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 pt-3 pb-6">
                <IconUser size="60" className="p-3 bg-zinc-600 rounded-full" />
                <p className="text-2xl m-0">Witaj, Lorem Ipsum!</p>
            </div>
            <div className="flex flex-col w-full space-y-2 mt-3">
                <Link to={`/account/tickets`}>
                    <div className="flex justify-between w-full items-center bg-zinc-900 border border-zinc-700 p-4 rounded-md cursor-pointer hover:bg-zinc-900/70 transition">
                        <div className="flex items-center space-x-5">
                            <IconTicket size="23" className="ml-1 flex-shrink-0" />
                            <div className="flex flex-col">
                                <p>Moje bilety</p>
                                <p className="text-sm text-zinc-400">Szczegóły zakupionych biletów: data zakupu, cena, ilość wykupionych miejsc</p>
                            </div>
                        </div>
                        <IconChevronRight className="flex-shrink-0 ml-4" />
                    </div>
                </Link>

                <div className="flex justify-between w-full items-center bg-zinc-900 border border-zinc-700 p-4 rounded-md cursor-pointer hover:bg-zinc-900/70 transition">
                    <div className="flex items-center space-x-5">
                        <IconStar size="23" className="ml-1 flex-shrink-0" />
                        <div className="flex flex-col">
                            <p>Moje recenzje</p>
                            <p className="text-sm text-zinc-400">Edytowanie i usuwanie recenzji</p>
                        </div>
                    </div>
                    <IconChevronRight className="flex-shrink-0 ml-4" />
                </div>
                <div className="flex justify-between w-full items-center bg-zinc-900 border border-zinc-700 p-4 rounded-md cursor-pointer hover:bg-zinc-900/70 transition">
                    <div className="flex items-center space-x-5">
                        <IconSettings size="23" className="ml-1 flex-shrink-0" />
                        <div className="flex flex-col">
                            <p>Ustawienia konta</p>
                            <p className="text-sm text-zinc-400">Zmiana adresu e-mail, zmiana hasła, usuwanie konta</p>
                        </div>
                    </div>
                    <IconChevronRight className="flex-shrink-0 ml-4" />
                </div>
            </div>
        </div>
    );
}

export default Menu;