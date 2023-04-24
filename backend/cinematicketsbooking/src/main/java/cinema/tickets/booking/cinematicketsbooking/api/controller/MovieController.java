package cinema.tickets.booking.cinematicketsbooking.api.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.tickets.booking.cinematicketsbooking.api.exception.MovieDoesntExistsException;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Rate;
import cinema.tickets.booking.cinematicketsbooking.sql.service.MovieService;

@RestController
@RequestMapping("/movie")
@CrossOrigin(maxAge = 3600)
public class MovieController {

    private MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }
    
    @PostMapping("/all/info")
    public List<Movie> getMovies() {
        return movieService.getMovies();
    }

    @PostMapping("/{id}/info")
    public ResponseEntity<Movie> getMovie(@PathVariable long id) { 
        Movie movie;
        try {
            movie = movieService.getMovie(id);
        } catch (MovieDoesntExistsException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
                
        return ResponseEntity.ok(movie);

    }

    @PutMapping("/add")
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movieBody) {
        
        try {
            Movie movie = movieService.addMovie(movieBody);
            return ResponseEntity.ok(movie);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
       
    } 

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Object> removeMovie(@PathVariable Long id) {
        try {
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/{id}/rates")
    public ResponseEntity<List<Rate>> getRates(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(movieService.getRates(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}

