package cinema.tickets.booking.cinematicketsbooking.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.tickets.booking.cinematicketsbooking.api.model.MovieBody;
import cinema.tickets.booking.cinematicketsbooking.api.model.response.MovieResponse;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;
import cinema.tickets.booking.cinematicketsbooking.sql.service.MovieService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/movie")
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
    
    @GetMapping("/get")
    public List<Movie> getMovies() {
        return movieService.getMovies();
    }

    @PutMapping("/add")
    public Movie addMovie(@Valid @RequestBody MovieBody movieBody) {
        return movieService.addMovie(movieBody);
    } 

    @PostMapping("/get/{id}")
    public ResponseEntity<MovieResponse> getMovie(@PathVariable long id) { 
        Movie movie = movieService.getMovie(id);

        if(movie == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }else {

            MovieResponse movieResponse = new MovieResponse();
            
            movieResponse.setId(movie.getId());
            movieResponse.setTitle(movie.getTitle());
            movieResponse.setDescription(movie.getDescription());
            movieResponse.setImageLink(movie.getImageLink());
            movieResponse.setRate(movie.getRate());
            movieResponse.setNumberOfRates(movie.getNumberOfRates());

            return ResponseEntity.ok(movieResponse);
        }
    }

}
