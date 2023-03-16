import { IconDeviceTv, IconStarFilled, IconTicket } from "@tabler/icons-react";

const Movie = () => {
    return (
        <div className="pageMainDivStyle">
            <div className="w-full rounded-md bg-zinc-800 flex flex-col p-3.5 space-y-4">
                <div className="flex h-80">
                    <div className="w-36 h-full bg-cover bg-center bg-no-repeat flex-shrink-0 rounded-md" style={{ backgroundImage: `url("example1.jpg")` }}></div>
                    <div className="flex flex-col flex-grow ml-3.5 justify-between">
                        <p className="font-bold text-xl line-clamp-4">Lorem ipsum dolor sit amet consectetur. rgrgrg trhrhrj rehrhpjhjp</p>
                        <div className="flex flex-col space-y-1">
                            <div className="flex space-x-2 text-lg items-center">
                                <IconStarFilled className="text-yellow-500" />
                                <p>4,5</p>
                            </div>
                            <p className="text-sm">1000 opinii</p>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <div className="customButton bg-zinc-700/80 flex items-center justify-center text-sm space-x-1.5">
                                <IconDeviceTv size="20" />
                                <p>Zobacz zwiastun</p>
                            </div>
                            <div className="customButton bg-gradient-to-r from-red-600 to-red-900 shadow-xl flex items-center justify-center text-sm space-x-1.5">
                                <IconTicket size="20" />
                                <p>Kup bilety</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="rounded-md border border-zinc-600 overflow-hidden">
                        <p className="text-center bg-zinc-900/20 py-1">Opis</p>
                        <p className="text-justify italic p-3 bg-zinc-700/50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed reiciendis enim neque officiis alias nisi quod est voluptatum ullam deleniti, porro explicabo ea labore rerum perferendis illo quia accusantium excepturi hic officia distinctio quo provident itaque eligendi. Maxime voluptate saepe dicta. Neque, eligendi tempora consequuntur sunt vel natus tempore eveniet cupiditate facilis excepturi officia amet, temporibus optio libero quasi nisi minus earum est doloremque. Commodi quis placeat delectus unde quas incidunt veniam sequi blanditiis quaerat tempore excepturi eligendi quibusdam natus voluptas omnis consequuntur autem, consequatur ut corrupti expedita magni. Atque dolores iusto ex maiores, omnis quam. Modi alias quod maxime?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movie;