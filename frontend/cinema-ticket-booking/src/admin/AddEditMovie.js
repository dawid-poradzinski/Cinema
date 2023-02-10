import axios from "axios";
import { useEffect, useState } from "react";
import { getAllMovies, putMovie, deleteMovie } from "../Endpoints";
import MovieAdminElement from "./MovieAdminElement";
import Toast from "../components/Toast";


const AddEditMovie = () => {
    //set dynamically changing variables
    const [moviesList, setMoviesList] = useState([]);
    //'inputs' state stores text put into inputs in form (title and description) and id of a movie (if user wants to update movie)
    const [inputs, setInputs] = useState({});
    const [toastComponent, setToastComponent] = useState(null);

    let closeTimeout = null;

    //get a list of movies from server while component is rendering for the first time
    useEffect(() => {
        getMoviesList();
    }, []);

    //send request to the server
    const getMoviesList = () => {
        axios.post(getAllMovies).then((response) => {
            let responseData = response.data;
            //sort movies by id
            responseData.sort((a, b) => b.id - a.id);
            //create list of components which React will display
            const movies = responseData.map((single) => <MovieAdminElement key={single.id} data={single} editFunction={handleEditButton} deleteFunction={handleDeleteMovie} />);
            setMoviesList(movies);
        }).catch(e => {
            console.error(e);
            handleShowToast("error", "Pobieranie listy filmów z bazy danych nie powiodło się", e.message);
        });
    }

    //update input state if user is writing title or description
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    //send changes to the server
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(putMovie, inputs)
            .then((response) => {
                handleShowToast("success", "Pomyślnie przesłano dane do bazy danych", "");
                //reset all variables inside 'inputs' state: id, title and description and request new list of movies from server
                setInputs({});
                getMoviesList();
            })
            .catch((error) => {
                console.error(error);
                handleShowToast('error', 'Przesyłanie danych do bazy danych nie powiodło się', error.message);
            })
    }

    //reset all variables inside 'inputs' state: id, title and description
    const handleReset = (e) => {
        setInputs({});
    }

    //if user clicked 'edit' button, than set title and description field to already existing values from movie
    const handleEditButton = (id, title, description) => {
        setInputs({
            title: title,
            description: description
        })
        setInputs(values => ({ ...values, ['id']: id }));

    }

    const handleShowToast = (type, text, errorCode) => {
        //make sure that only one toast is showing at once
        if (toastComponent) {
            setToastComponent(null);
            clearTimeout(closeTimeout);
        }
        //update toastComponent state to show Toast component and remove it from DOM after 8 seconds
        setToastComponent(<Toast type={type} text={text} errorCode={errorCode} closeAction={handleCloseToast} />);
        closeTimeout = setTimeout(() => {
            setToastComponent(null);
        }, 8000);
    }

    const handleCloseToast = () => {
        clearTimeout(closeTimeout);
        setToastComponent(null);
    }

    const handleDeleteMovie = (id) => {
        axios.delete(deleteMovie(id))
            .then((response) => {
                handleShowToast("success", "Pomyślnie usunięto wybrany film", "");
                //after successful delete, request a new list of movies from server
                getMoviesList();
            })
            .catch((error) => {
                console.error(error);
                handleShowToast("error", "Wystąpił błąd podczas usuwania filmu", error.message);
            });
    }

    return (
        <div className="flex flex-col w-full pt-20 lg:pt-24 pb-10 px-1.5 items-center">
            <div className="adminMainContainer lg:mt-8">
                <p className="adminParagraph">Dodaj lub edytuj film</p>
                <div className="adminContentContainer">
                    <p className="text-xs text-zinc-300 mb-2">ID filmu: {inputs.id ? inputs.id : 'zostanie wygenerowane automatycznie'}</p>
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <input type="text" name="title" id="title" value={inputs.title || ""} onChange={handleChange} placeholder="Tytuł filmu" />
                        <textarea className="h-40" type="text" name="description" id="description" value={inputs.description || ""} onChange={handleChange} placeholder="Opis filmu" />
                        <div className="flex justify-end space-x-2">
                            <button onClick={handleReset} type="reset" className="customButton bg-zinc-700 hover:bg-zinc-600 sm:w-32">
                                Resetuj
                            </button>
                            <button type="submit" className="customButton bg-green-700 hover:bg-green-600 sm:w-32">
                                Prześlij
                            </button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="adminMainContainer mt-3 lg:mt-10">
                <p className="adminParagraph">Edytuj filmy</p>
                <div className="adminContentContainer space-y-5">
                    {/* show list of MovieAdminElement components generated earlier */}
                    {moviesList}
                </div>
            </div>
            {/* if toastComponent isn't null, show it */}
            {toastComponent}
        </div>
    );
}

export default AddEditMovie;