package cinema.tickets.booking.cinematicketbooking.movies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MovieConnector
{
    // Rozkaz ładowania serwisu TopicService
    @Autowired
    private MovieService movieService;

    @RequestMapping("/hello")
    public String hello()
    {
        return "hello";
    }

    @RequestMapping("/movies")
    public List<Movie> getAllMovies()
    {
        return movieService.getAllMovies();
    }

    // Zmienne trzymamy w {}, a przekazanie ich jako do zmiennych w funkcji idzie przez @PathVariable
    @RequestMapping("/movies/{id}")
    public Movie getMovieById(@PathVariable String id)
    {
        return movieService.getMovie(id);
    }

    // Zapist funkcji w metodzie POST | Potrzeba wypełnienia poprzez @RequestBody | Zapis nowego topica do bazy
    @RequestMapping(method=RequestMethod.PUT, value="/movies")
    public void addTopic(@RequestBody Movie movie)
    {
        movieService.addMovie(movie);
    }
}