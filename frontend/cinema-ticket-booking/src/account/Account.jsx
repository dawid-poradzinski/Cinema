import { IconChevronRight, IconSettings, IconStar, IconTicket, IconUser } from "@tabler/icons-react";

const Account = () => {
    return (
        <div className="pageMainDivStyle">
            <div className="flex flex-col w-full">
                <div className="flex flex-col items-center space-y-3 py-3">
                    <IconUser size="60" className=" p-3 bg-zinc-600 rounded-full" />
                    <p className="text-xl">Witaj, Lorem Ipsum!</p>
                </div>
                <div className="flex flex-col w-full space-y-2 mt-3">
                    <div className="flex justify-between w-full items-center bg-zinc-800 p-4 rounded-md">
                        <div className="flex items-center space-x-4">
                            <IconTicket size="23" />
                            <p>Moje bilety</p>
                        </div>
                        <IconChevronRight />
                    </div>
                    <div className="flex justify-between w-full items-center bg-zinc-800 p-4 rounded-md">
                        <div className="flex items-center space-x-4">
                            <IconStar size="23" />
                            <p>Moje recenzje</p>
                        </div>
                        <IconChevronRight />
                    </div>
                    <div className="flex justify-between w-full items-center bg-zinc-800 p-4 rounded-md">
                        <div className="flex items-center space-x-4">
                            <IconSettings size="23" />
                            <p>Ustawienia konta</p>
                        </div>
                        <IconChevronRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;