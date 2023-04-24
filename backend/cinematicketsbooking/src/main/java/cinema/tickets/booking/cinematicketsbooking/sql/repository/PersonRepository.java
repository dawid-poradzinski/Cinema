package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;


public interface PersonRepository extends CrudRepository<Person, Long> {

    Optional<Person> findByUsernameIgnoreCase(String username);
    Optional<Person> findByEmailIgnoreCase(String email);
    @Query("SELECT p FROM person p WHERE lower(p.username) = lower(:usernameOrEmail) OR lower(p.email) = lower(:usernameOrEmail)")
    Optional<Person> findByUsernameOrEmailIgnoreCase(@Param("usernameOrEmail") String usernameOrEmail);
}
