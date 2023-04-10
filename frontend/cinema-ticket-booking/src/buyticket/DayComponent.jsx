import HourComponent from "./HourComponent";

const DayComponent = () => {
    return (
        <div className="flex flex-col bg-zinc-800 p-3 border-2 border-zinc-700 rounded-md space-y-4">
            <p className="text-lg text-center">10.04 (poniedziałek)</p>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>
            <HourComponent/>

        </div>
    );
}

export default DayComponent;