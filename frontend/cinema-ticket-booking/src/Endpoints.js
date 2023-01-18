const mainEndpoint = "http://localhost:8080/";

const getAllMovies = mainEndpoint + "movies";
const getSingleMovie = (id) => {
    return mainEndpoint + "movies/" + id;
}
const putMovie = mainEndpoint + "movies";

export {mainEndpoint, getAllMovies, getSingleMovie, putMovie};