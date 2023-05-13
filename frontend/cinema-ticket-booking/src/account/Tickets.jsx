import { IconArrowLeft, IconQrcode, IconReceiptRefund, IconStar, IconWallet } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-8">
                <div className="flex space-x-4 items-center w-fit cursor-pointer text-zinc-400 hover:underline" onClick={() => navigate(-1)}>
                    <IconArrowLeft size="20"/>
                    <p className="text-md">Menu konta</p>
                </div>
                <p className="text-3xl">Twoje bilety</p>
            </div>
            <div className="flex flex-col mt-7">
                <div className="flex flex-col sm:flex-row sm:justify-between w-full bg-zinc-900 rounded-md border border-zinc-800 p-5 shadow-lg">
                    <div className="flex flex-col text-sm">
                        <div className="flex flex-col mb-3">
                            <p className="text-2xl mb-3">Tytuł fajnego filmu</p>
                            <p>Data seansu: 15.05.2023, 15:50</p>
                            <p>Numer sali: 2</p>
                        </div>
                        <p>Data zakupu: 13.05.2022, 20:59:59</p>
                        <p>Zakupione miejsca: 2</p>
                        <p>Płatność: <span className="text-green-500">Zapłacono</span></p>
                        <p className="mt-3 text-zinc-400">ID: 156</p>
                    </div>
                    <div className="flex flex-col mt-4 sm:mt-0 sm:w-48 justify-center space-y-2">
                        <div className="customButton flex space-x-2 items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 hover:brightness-110">
                            <IconQrcode size="20" />
                            <p>Kod QR</p>
                        </div>
                        <div className="customButton flex space-x-2 items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-700 hover:brightness-110">
                            <IconStar size="20" />
                            <p>Oceń film</p>
                        </div>
                        <div className="customButton flex space-x-2 items-center justify-center bg-gradient-to-r from-red-500 to-red-700 hover:brightness-110">
                            <IconReceiptRefund size="20" />
                            <p>Zwróć bilet</p>
                        </div>
                        <div className="customButton flex space-x-2 items-center justify-center bg-gradient-to-r from-teal-500 to-teal-700 hover:brightness-110">
                            <IconWallet size="20" />
                            <p>Zapłać</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Tickets;