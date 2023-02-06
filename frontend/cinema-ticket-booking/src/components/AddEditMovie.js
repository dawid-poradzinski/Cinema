import axios from "axios";
import { useState } from "react";
import { getMovieByTitle, putMovie } from "../Endpoints";


const AddEditMovie = () => {
    const [inputs, setInputs] = useState({});
    const [titleToSearch, setTitleToSearch] = useState("");

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSearchChange = (e) => {
        setTitleToSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(putMovie, inputs);
        axios.put(putMovie, inputs)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(error);
        })
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(titleToSearch);
        axios.post(getMovieByTitle(titleToSearch))
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(error);
        })
    }

    return (
        <div>
            <form className="flex flex-col space-y-4 p-4" onSubmit={handleSubmit}>
                <input type="number" name="id" id="id" onChange={handleChange} placeholder="ID filmu" />
                <input type="text" name="title" id="title" value={inputs.title || ""} onChange={handleChange} placeholder="Tytuł filmu" />
                <input type="text" name="description" id="description" value={inputs.description || ""} onChange={handleChange} placeholder="Opis filmu" />
                <button type="submit" className="bg-green-700 p-3 rounded-md text-center cursor-pointer">
                    <p>Submit</p>
                </button>
            </form>

            <form onSubmit={handleSearch}>
                <input type="text" name="titleToSearch" id="titleToSearch" value={titleToSearch || ""} onChange={handleSearchChange} placeholder="Tytuł filmu" />
                <button>Szukaj</button>
            </form>

        </div>
    );
}

export default AddEditMovie;