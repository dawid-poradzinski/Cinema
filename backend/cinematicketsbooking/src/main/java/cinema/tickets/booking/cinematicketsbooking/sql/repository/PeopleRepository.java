package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import cinema.tickets.booking.cinematicketsbooking.sql.model.People;

public interface PeopleRepository extends CrudRepository<People, Long>{
    Optional<People> findByUsernameIgnoreCase(String username);
    Optional<People> findByEmailIgnoreCase(String email);
}
