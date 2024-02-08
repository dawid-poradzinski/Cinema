package cinema.tickets.booking.cinematicketsbooking.sql.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.api.exception.MovieDoesntExistsException;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Rate;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.MovieRepository;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.RateRepository;

import java.util.Collections;

@Service
public class MovieService {
    private MovieRepository movieRepository;
    private RateRepository rateRepository;

    public MovieService(MovieRepository movieRepository, RateRepository rateRepository) {
        this.movieRepository = movieRepository;
        this.rateRepository = rateRepository;
    }

    public List<Movie> getMovies() {
        Optional<List<Movie>> opMovies = movieRepository.getAllMoviesWithRates();

        if(opMovies.isPresent()) {
            return opMovies.get();
        }
        
        return Collections.emptyList();

    }

    public Movie addMovie(Movie movieBody) {
        Movie movie = new Movie();
        movie.setTitle(movieBody.getTitle());
        movie.setDescription(movieBody.getDescription());
        movie.setImageLink(movieBody.getImageLink());

        return movieRepository.save(movie);
    }

    public Movie getMovie(Long id) throws MovieDoesntExistsException {
        try {
            Optional<Movie> opMovie = movieRepository.getSingleMovieById(id);
            return opMovie.get();
        } catch (Exception e) {
            throw new MovieDoesntExistsException();
        }
    }

    public boolean removeMovie(Long id) throws MovieDoesntExistsException {

        if(doMovieExist(id)) {
           movieRepository.deleteById(id);
           return true;
        }
        throw new MovieDoesntExistsException();
    }

    public List<Rate> getRates(Long id) throws MovieDoesntExistsException {
        if(doMovieExist(id)) {
           return rateRepository.findAllByMovieId(id);
        }
        throw new MovieDoesntExistsException();
    }

    private boolean doMovieExist(Long id) {
        Optional<Movie> movie = movieRepository.findById(id);
        if(movie.isPresent()) {
            return true;
        }
        return false;
    } 
}
