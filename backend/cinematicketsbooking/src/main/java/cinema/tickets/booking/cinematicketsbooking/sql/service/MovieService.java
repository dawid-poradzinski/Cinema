package cinema.tickets.booking.cinematicketsbooking.sql.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.api.exception.MovieDoesntExistsException;
import cinema.tickets.booking.cinematicketsbooking.api.model.MovieBody;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.MovieRepository;

@Service
public class MovieService {
    private MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getMovies() {
        return movieRepository.getAllMoviesWithRates();
    }

    public Movie addMovie(MovieBody movieBody) {
        Movie movie = new Movie();
        movie.setTitle(movieBody.getTitle());
        movie.setDescription(movieBody.getDescription());
        movie.setImageLink(movieBody.getImageLink());

        return movieRepository.save(movie);
    }

    public Movie getMovie(Long id) throws MovieDoesntExistsException {
        Optional<Movie> opMovie = movieRepository.getSingleMovieById(id);
        if(opMovie.isPresent()) {
            return opMovie.get();
        }
        throw new MovieDoesntExistsException();
    }
}
