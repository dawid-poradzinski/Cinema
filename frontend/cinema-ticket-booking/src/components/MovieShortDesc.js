const MovieShortDesc = (props) => {
    const data = props.data;
    return (
        <div className="MovieDescRoot flex flex-col bg-gray-800 w-44 h-[420px] rounded-lg overflow-hidden">
            <div className="MovieImg bg-green-500 w-full h-64 flex-shrink-0" />
            <div className="MovieDescText flex flex-col justify-evenly h-full px-3.5 w-full">
                <p className="text-white font-semibold">{data.title}</p>
                <p className="font-light text-xs line-clamp-3">{data.description}</p>
                <div className="BuyButton w-full h-8 bg-red-700 rounded-md flex items-center justify-center cursor-pointer hover:bg-red-600 transition-all">
                    <p className="text-sm font-semibold align-middle select-none">Kup teraz</p>
                </div>
            </div>
        </div>
    );
}

export default MovieShortDesc;