import { IconX } from "@tabler/icons-react";

const Toast = (props) => {
    let color = '';

    switch(props.type) {
        case 'success':
            color = 'bg-green-600/70';
            break;
        case 'warning':
            color = 'bg-yellow-600/70';
            break;
        case 'error':
            color = 'bg-red-600/70';
            break;
        default:
            color = 'bg-white/70';
    }

    return (
        <div className="fixed bottom-0 left-0 w-full flex items-center justify-center px-4">
            <div className={`flex px-4 py-3 backdrop-blur-md mb-5 rounded-md shadow-xl space-x-5 items-center flex-shrink ${color}`}>
                <div className="flex flex-col space-y-1.5">
                    <p>{props.text}</p>
                    <p className={`text-sm ${props.errorCode ? 'block' : 'hidden'}`}>Kod błędu: <span className="italic">{props.errorCode}</span></p>
                </div>
                <IconX size="20" className="flex-shrink-0 cursor-pointer" onClick={props.closeAction}/>
            </div>
        </div>
    );
}

export default Toast;