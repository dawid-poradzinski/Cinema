import { IconBrandPaypal, IconCash, IconCreditCard, IconCurrencyBitcoin, IconTicket } from "@tabler/icons-react";

const Summary = () => {
    return (
        <div className="p-5 lg:px-16 space-y-5">
            <p className="text-xl">Podsumowanie</p>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between items-center shadow-2xl shadow-red-500 rounded-md py-5 px-7 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                <div className="flex items-center space-x-7">
                <IconTicket size="50" />
                    <div className="flex flex-col space-y-1.5">
                        <p className="text-2xl max-w-xs line-clamp-2">Lorem ipsum</p>
                        <p>Ilość biletów: 2</p>
                    </div>
                </div>
                <p className="text-3xl font-bold">70 zł</p>
            </div>
            <p className="pt-6">Wybierz metodę płatności</p>
            <div className="flex flex-col md:flex-row md:justify-between md:space-x-1.5 space-y-3 md:space-y-0">
                <div className="flex flex-col border border-zinc-700 rounded-md p-4 w-full md:w-44 items-center space-y-1.5 hover:bg-zinc-600 transition duration-500 cursor-pointer hover:scale-105">
                    <IconCreditCard size="40"/>
                    <p>Karta płatnicza</p>
                </div>
                <div className="flex flex-col border border-zinc-700 rounded-md p-4 w-full md:w-44 items-center space-y-1.5 hover:bg-blue-600 transition duration-500 cursor-pointer hover:scale-105">
                    <IconBrandPaypal size="40"/>
                    <p>PayPal</p>
                </div>
                <div className="flex flex-col border border-zinc-700 rounded-md p-4 w-full md:w-44 items-center space-y-1.5 hover:bg-yellow-600 transition duration-500 cursor-pointer hover:scale-105">
                    <IconCurrencyBitcoin size="40" />
                    <p>Kryptowaluty</p>
                </div>
                <div className="flex flex-col border border-zinc-700 rounded-md p-4 w-full md:w-44 items-center space-y-1.5 hover:bg-green-600 transition duration-500 cursor-pointer hover:scale-105">
                    <IconCash size="40"/>
                    <p>Gotówka w kinie</p>
                </div>

            </div>
        </div>
    );
}

export default Summary;