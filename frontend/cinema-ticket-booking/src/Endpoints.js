const mainEndpoint = "http://localhost:8080/";

const getAllMovies = mainEndpoint + "movies";
const getSingleMovie = (id) => {
    return mainEndpoint + "movies/" + id;
}
const putMovie = mainEndpoint + "movies/addMovie";
const deleteMovie = (id) => {
    return mainEndpoint + "movies/getById/" + id;
}

const getMovieByTitle = (title) => {
    return mainEndpoint + "movies/getByTitle/" + title;
} 
export { mainEndpoint, getAllMovies, getSingleMovie, putMovie, deleteMovie, getMovieByTitle };