import { IconStarFilled } from "@tabler/icons-react";

const ReviewsSummary = () => {
    return (<div className="flex flex-col flex-grow bg-zinc-900 rounded-md mb-5 p-5 shadow-2xl justify-evenly h-80">
        <div className="flex text-4xl space-x-3 justify-center">
            <IconStarFilled className="text-yellow-500" size="40" />
            <p>4,5</p>
        </div>
        <div className="flex flex-col space-y-2 mt-3">
            <p className="text-sm">1000 ocen</p>
            <div className="flex space-x-3 items-center">
                <p className="text-sm w-3 text-center">5</p>
                <div className="w-full h-4 bg-zinc-800 rounded-md overflow-hidden">
                    <div className="h-full w-full bg-yellow-500"></div>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                <p className="text-sm w-3 text-center">4</p>
                <div className="w-full h-4 bg-zinc-800 rounded-md overflow-hidden">
                    <div className="h-full w-5/6 bg-yellow-500"></div>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                <p className="text-sm w-3 text-center">3</p>
                <div className="w-full h-4 bg-zinc-800 rounded-md overflow-hidden">
                    <div className="h-full w-3/6 bg-yellow-500"></div>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                <p className="text-sm w-3 text-center">2</p>
                <div className="w-full h-4 bg-zinc-800 rounded-md overflow-hidden">
                    <div className="h-full w-2/6 bg-yellow-500"></div>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                <p className="text-sm w-3 text-center">1</p>
                <div className="w-full h-4 bg-zinc-800 rounded-md overflow-hidden">
                    <div className="h-full w-1/6 bg-yellow-500"></div>
                </div>
            </div>
        </div>
    </div>);
}

export default ReviewsSummary;