import axios from "axios";
import { deleteMovie } from "../Endpoints";

const MovieShortDesc = (props) => {
    const data = props.data;


    const handleClick = (e) => {
        e.preventDefault();
        axios.delete(deleteMovie(data.id))
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert(error);
            });
    }
    return (
        <div className="flex flex-col h-72 w-36 md:h-96 md:w-52 bg-zinc-800 rounded-md overflow-auto cursor-pointer hover:-translate-y-1.5 transition duration-500 hover:brightness-150 hover:shadow-lg hover:shadow-white/10">
            <div className="flex flex-col h-full bg-cover bg-center" style={{ backgroundImage: 'url("/example1.jpg")' }}>
            </div>
            <div className="m-2">
                <p className="text-sm text-center line-clamp-2">{data.title}</p>
            </div>
        </div>
    );
}

export default MovieShortDesc;