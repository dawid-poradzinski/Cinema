package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Movie;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Rate;

public interface RateRepository extends CrudRepository<Rate, Long>{

    public List<Rate> findAllByMovieId(long movieId);

    @Query("SELECT r FROM rate r WHERE r.person = :person AND r.movie = :movie")
    Optional<Rate> findByPersonIdAndMovieId(@Param("person") Person person, @Param("movie") Movie movie);
    
}
