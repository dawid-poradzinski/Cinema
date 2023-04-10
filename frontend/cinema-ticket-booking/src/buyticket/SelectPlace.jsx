import Place from "./Place";

const SelectPlace = () => {
    let places = [
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0]
    ];

    const body = [];
    for (let i = 0; i < places.length; i++) {
        const cells = [];
        for (let j = 0; j < places[i].length; j++) {
            if (j === 6) {
                cells.push(<td><Place reserved={-1} /></td>);
                cells.push(<td><Place reserved={-1} /></td>);
            }
            cells.push(<td><Place reserved={places[i][j]} /></td>);
        }
        body.push(<tr key={i}>{cells}</tr>);
    }
    return (


        <div className="flex flex-col h-full justify-center items-center p-5 lg:px-16 overflow-hidden">
            <p className="text-xl self-start mb-2">Wybierz lokalizację</p>
            <p className="text-md self-start mb-2">Wybrano: 0 miejsc</p>
            <div className="flex flex-col w-full h-full overflow-auto md:my-5 p-5 md:p-0">
                <div className="w-[587px] h-10 flex-shrink-0 bg-white"></div>
                <table className="w-[587px]">
                    <tbody>
                        {body}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default SelectPlace;