import { IconDeviceTv, IconStar, IconStarFilled, IconTicket } from "@tabler/icons-react";
import AddReview from "../components/AddReview";
import Review from "../components/Review";
import ReviewsSummary from "../components/ReviewsSummary";

const Movie = () => {
    return (
        <div className="pageMainDivStyle bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('example1.jpg')` }}>
            <div className="w-full rounded-md bg-zinc-800/90 flex md:backdrop-blur-lg flex-col p-3.5 md:p-16 space-y-4 md:max-w-7xl">
                <div className="flex h-64">
                    <div className="w-40 h-full bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-md shadow-2xl" style={{ backgroundImage: `url("example1.jpg")` }}></div>
                    <div className="flex flex-col md:flex-row ml-3.5 md:ml-10 flex-grow justify-between md:items-center md:space-x-16 h-full">
                        <div className="flex flex-col h-full flex-grow md:justify-center md:space-y-4 space-y-2">
                            <p className="font-bold text-2xl md:text-4xl break-words w-full">Zaczarowany świat zwierząt</p>
                            <div className="flex flex-col space-y-1">
                                <div className="flex space-x-2 items-center flex-shrink-0">
                                    <IconStarFilled className="text-yellow-500 md:h-7 md:w-7" />
                                    <p className="text-2xl md:text-2xl">4,5</p>
                                </div>
                                <p className="text-sm md:text-md">1000 opinii</p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-1.5 md:space-y-2 md:w-44 flex-shrink-0">
                            <div className="customButton bg-zinc-700/80 flex items-center justify-center text-sm space-x-1.5 hover:brightness-110">
                                <IconDeviceTv size="25" />
                                <p>Zobacz zwiastun</p>
                            </div>
                            <div className="customButton bg-gradient-to-r from-red-600 to-red-900 shadow-xl flex items-center justify-center text-sm space-x-1.5 hover:brightness-110 hover:scale-105">
                                <IconTicket size="25" />
                                <p>Kup bilety</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 md:pt-9">
                    <div className="movieContentDiv">
                        <p className="movieContentHeader">Opis</p>
                        <p className="text-justify italic p-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed reiciendis enim neque officiis alias nisi quod est voluptatum ullam deleniti, porro explicabo ea labore rerum perferendis illo quia accusantium excepturi hic officia distinctio quo provident itaque eligendi. Maxime voluptate saepe dicta. Neque, eligendi tempora consequuntur sunt vel natus tempore eveniet cupiditate facilis excepturi officia amet, temporibus optio libero quasi nisi minus earum est doloremque. Commodi quis placeat delectus unde quas incidunt veniam sequi blanditiis quaerat tempore excepturi eligendi quibusdam natus voluptas omnis consequuntur autem, consequatur ut corrupti expedita magni. Atque dolores iusto ex maiores, omnis quam. Modi alias quod maxime?</p>
                    </div>
                    <div className="movieContentDiv">
                        <p className="movieContentHeader">Opinie</p>
                        <div className="flex flex-col p-5">
                            <div className="flex flex-col md:flex-row w-full flex-grow md:space-x-3 space-y-3 md:space-y-0">
                                <AddReview />
                                <ReviewsSummary />
                            </div>
                            <div className="flex flex-col mt-5">
                                <p className="text-center mb-3">Opinie innych widzów</p>
                                <div className="flex flex-col">
                                    <Review />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;