package cinema.tickets.booking.cinematicketbooking.movies;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Aby było wiadome, że to takie jakby API
@Service
public class MovieService
{
    // rozkaz załadowania
    @Autowired
    private MovieRepository movieRepository;

    // Zwrócenie każdego movie
    public List<Movie> getAllMovies()
    {
        List<Movie> movies = new ArrayList<>();

        movieRepository.findAll()
        .forEach(movies::add);

        return movies;
    }

    // Zwrócenie wybranego movie
    public Movie getMovie(String id)
    {
        return movieRepository.findById(id).get();
    }

    // Tworzenie nowego movie
    public void addMovie(Movie movie)
    {
        movieRepository.save(movie);
    }

    // Usuwa movie
    public void deleteMovie(String id)
    {
        movieRepository.deleteById(id);
    }
}
