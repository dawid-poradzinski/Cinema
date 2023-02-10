import { IconTrash, IconX } from "@tabler/icons-react";

const ConfirmMovieDeleteDialog = (props) => {

    const handleCancelClick = () => {
        props.setVisibility(false);
    }

    const handleDeleteClick = () => {
        props.deleteFunction();
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-md bg-zinc-700/20 z-10 flex items-center justify-center">
            <div className="flex flex-col bg-zinc-900 rounded-md w-96 p-4 m-1.5 gap-5 drop-shadow-lg">
                <IconX size="30" onClick={handleCancelClick} className="self-end cursor-pointer" />
                <IconTrash size="80" className="self-center p-3 bg-gradient-to-br from-pink-600 to-red-600 rounded-md" />
                <p className="text-lg text-center">Czy na pewno chcesz usunąć ten film?</p>
                <div className="flex w-fit self-center p-3 flex-col gap-3 text-center border rounded-md border-zinc-800">
                    <div>
                        <p className="text-sm text-zinc-500">Tytuł</p>
                        <p className="text-xl font-bold">{props.movieTitle}</p>
                    </div>
                    <div>
                        <p className="text-sm text-zinc-500">ID filmu</p>
                        <p className="text-xl font-bold">{props.movieID}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div onClick={handleCancelClick} className="customButton flex bg-zinc-700 hover:bg-zinc-600 justify-center items-center space-x-1">
                        <IconX className="w-5" />
                        <p>Anuluj</p>
                    </div>
                    <div onClick={handleDeleteClick} className="customButton flex bg-gradient-to-br from-pink-600 to-red-600 hover:brightness-125 justify-center items-center space-x-1">
                        <IconTrash className="w-5 pb-0.5" />
                        <p>Usuń</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmMovieDeleteDialog;