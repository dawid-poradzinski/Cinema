package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;

public interface MovieRepository extends ListCrudRepository<Movie, Long>{

    // TODO zdecydować, czy zostawić Optional<Movie> i zwracać jako ResponseEntity, czy jednak zostawić samo zwracanie tylko Movie
    @Query("SELECT new movie(m.id AS id, m.title AS title, m.description AS description, m.imageLink as imageLink, COALESCE(AVG(r.score), 0.0) AS rating, COUNT(r.score) AS numberOfRates) FROM movie m JOIN rates r WHERE m.id=?1")
    public Optional<Movie> getSingleMovieById(long id);

    @Query("SELECT new movie(m.id AS id, m.title AS title, m.description AS description, m.imageLink as imageLink, COALESCE(AVG(r.score), 0.0) AS rating, COUNT(r.score) AS numberOfRates) FROM movie m LEFT JOIN m.rates r GROUP BY m.id")
    public Optional<List<Movie>> getAllMoviesWithRates();
}
