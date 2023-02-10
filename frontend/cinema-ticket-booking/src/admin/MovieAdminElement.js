import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import ConfirmMovieDeleteDialog from "./ConfirmMovieDeleteDialog";

const MovieElement = (props) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [isConfirmDeleteDialogVisible, setIsConfirmDeleteDialogVisible] = useState(false);
    const handleMovieClick = (e) => {
        setIsDetailsVisible(!isDetailsVisible);
    }

    const handleEditClick = (e) => {
        props.editFunction(props.data.id, props.data.title, props.data.description);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const handleDeleteClick = () => {
        handleShowConfirmMovieDeleteDialog(true);
    }

    const handleShowConfirmMovieDeleteDialog = (show) => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
        setIsConfirmDeleteDialogVisible(show);
    }

    const deleteMovie = () => {
        handleShowConfirmMovieDeleteDialog(false);
        props.deleteFunction(props.data.id);
    }

    return (
        <div className={`w-full bg-zinc-900/50 flex flex-col gap-2 rounded-md hover:bg-zinc-900/80 transition duration-300 ${isDetailsVisible ? 'bg-zinc-900/80' : ''}`}>
            <div onClick={handleMovieClick} className="flex flex-grow-0 flex-shrink-0 space-x-5 h-24 cursor-pointer p-3">
                <div style={{ backgroundImage: 'url("/example1.jpg")' }} className="h-full w-11 bg-cover bg-center flex-shrink-0"></div>
                <div className="flex flex-col overflow-hidden justify-center flex-grow">
                    <p className="text-lg font-bold flex-grow-0 line-clamp-2">{props.data.title}</p>
                    <p className="line-clamp-2 text-xs">ID filmu: {props.data.id}</p>
                </div>
                <IconPencil className="flex-shrink-0 w-8 h-8 p-1.5 bg-zinc-800 rounded-md self-center" />
            </div>
            <div className={`flex flex-col space-y-4 px-3 pb-3 ${isDetailsVisible ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-1">
                    <p className="text-xs text-zinc-400">Opis filmu</p>
                    <p className="text-sm">{props.data.description}</p>
                </div>
                <div className="flex flex-col space-y-1">
                    <div className="flex space-x-2">
                        <div onClick={handleEditClick} className="customButton flex bg-zinc-700 hover:bg-zinc-600 justify-center items-center space-x-1">
                            <IconPencil className="w-5" />
                            <p>Edytuj</p>
                        </div>
                        <div onClick={handleDeleteClick} className="customButton flex bg-red-700 hover:bg-red-600 justify-center items-center space-x-1">
                            <IconTrash className="w-5" />
                            <p>Usuń</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                isConfirmDeleteDialogVisible && <ConfirmMovieDeleteDialog movieTitle={props.data.title} movieID={props.data.id} setVisibility={handleShowConfirmMovieDeleteDialog} deleteFunction={deleteMovie} />
            }

        </div>
    );
}

export default MovieElement;