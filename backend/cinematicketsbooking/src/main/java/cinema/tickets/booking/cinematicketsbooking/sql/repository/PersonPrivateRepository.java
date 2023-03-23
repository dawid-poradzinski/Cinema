package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import cinema.tickets.booking.cinematicketsbooking.sql.model.PersonPrivate;

public interface PersonPrivateRepository extends CrudRepository<PersonPrivate, Long>{
    
    @Query("SELECT p FROM person_private p WHERE p.person.username = ?1")
    Optional<PersonPrivate> findPrivateByUsername(String username);
}
