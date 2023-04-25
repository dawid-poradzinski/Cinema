import { IconArmchair, IconChevronRight, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import SelectDate from "./SelectDate";
import SelectPlace from "./SelectPlace";
import Summary from "./Summary";

const Container = (props) => {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
    });
    const [stage, setStage] = useState(0);

    return (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full h-full z-10 p-5 bg-zinc-900/80 backdrop-blur-md lg:p-16">
            <div className="flex flex-col w-full h-full rounded-md bg-zinc-800 overflow-hidden border border-zinc-700 lg:max-w-4xl">
                <div className="flex justify-between p-5 bg-zinc-800">
                    <p>Kup bilet</p>
                    <IconX onClick={props.closeWindow} className="cursor-pointer" />
                </div>
                <div className="flex flex-col flex-grow bg-zinc-900 overflow-y-auto">
                    {(stage === 0 && <SelectDate/>) ||
                    (stage === 1 && <SelectPlace/>) ||
                    (stage === 2 && <Summary/>)

                    }
                </div>
                <div className="flex p-5 bg-zinc-800 space-x-2 lg:justify-end">
                    <div onClick={() => setStage(stage-1)} className="customButton flex items-center justify-center bg-zinc-600 hover:bg-zinc-500 lg:w-32">
                        <p>Wstecz</p>
                    </div>
                    <div onClick={() => setStage(stage+1)} className="customButton flex items-center justify-center bg-amber-600 hover:bg-amber-500 lg:w-32">
                        <p>Dalej</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Container;