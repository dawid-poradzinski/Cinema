package cinema.tickets.booking.cinematicketbooking.movies;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;


// Połączenie strony z wyświetlaną zawartością
@RestController
public class MovieConnector
{
    // Rozkaz ładowania serwisu TopicService
    @Autowired
    private MovieService movieService;

    // Zwraca wszystkie mozliwe filmy
    // @RequestMapping(method=RequestMethod.POST, value="/movies")
    @PostMapping("/movies")
    public List<Movie> getAllMovies()
    {
        return movieService.getAllMovies();
    }

    // Zmienne trzymamy w {}, a przekazanie ich jako do zmiennych w funkcji idzie przez @PathVariable
    // @RequestMapping(method=RequestMethod.POST, value="/movies/getById/{id}")
    @PostMapping("/movies/getById/{id}")
    public Movie getMovieById(@PathVariable int id)
    {
        return movieService.getMovie(id);
    }

    // Zapist funkcji w metodzie POST | Potrzeba wypełnienia poprzez @RequestBody | Zapis nowego topica do bazy
    // @RequestMapping(method=RequestMethod.PUT, value="/movies/addMovie")
    @PutMapping(value="/movies/addMovie")
    public void addTopic(@RequestBody Movie movie)
    {
        movieService.addMovie(movie);
    }

    // Edycja wcześniej już stworzonego Movie
    // @RequestMapping(method=RequestMethod.PUT, value="/movies/getById/{id}")
    @PutMapping("/movies/getById/{id}")
    public void editMovie(@PathVariable int id, @RequestBody Movie movie)
    {
        movieService.editMovie(id, movie);
    }

    // Usuwanie wcześniej stworzonego Movie
    // @RequestMapping(method={RequestMethod.DELETE,RequestMethod.GET}, value="movies/getById/{id}")
    @DeleteMapping("/movies/getById/{id}")
    public void deleteMovie(@PathVariable int id)
    {
        movieService.deleteMovie(id); 
    }

    // Odnalezienie poprzez title. Funkcja sama się tworzy dzieki JpaRepository
    // @RequestMapping("/movies/getByTitle/{title}")
    @PostMapping("/movies/getByTitle/{title}")
    @ResponseBody
    public void getMovieByTitle(@PathVariable String title)
    {
        movieService.getMovieByTitle(title);
    }
}