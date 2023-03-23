package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;


public interface PersonRepository extends CrudRepository<Person, Long> {

    Optional<Person> findByUsernameIgnoreCase(String username);
    Optional<Person> findByEmailIgnoreCase(String email);
}
