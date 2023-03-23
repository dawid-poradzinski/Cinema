package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;

public interface MovieRepository extends ListCrudRepository<Movie, Long>{
    @Query("SELECT new movie(m.id, m.title, m.description, m.imageLink, COALESCE(AVG(r.score), 0.0), COUNT(r.score)) FROM movie m JOIN rates r WHERE m.id=?1")
    public Optional<Movie> getSingleMovieById(long id);

    @Query("SELECT new movie(m.id, m.title, m.description, m.imageLink, COALESCE(AVG(r.score), 0.0), COUNT(r.score)) FROM movie m LEFT JOIN m.rates r GROUP BY m.id")
    public List<Movie> getAllMoviesWithRates();
}
