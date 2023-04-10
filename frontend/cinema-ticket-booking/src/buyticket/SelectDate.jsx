import DayComponent from "./DayComponent";

const SelectDate = () => {
    return (
        <div className="p-5 lg:px-16 space-y-5">
            <p className="text-xl">Wybierz termin</p>
            <div className="flex flex-col flex-grow-0 flex-shrink-0 space-y-4">
                <DayComponent />
                <DayComponent />
                <DayComponent />
            </div>
        </div>
    );
}

export default SelectDate;