package cinema.tickets.booking.cinematicketbooking.movies;

import org.springframework.data.repository.CrudRepository;

// interface dla JPA, aby tworzyć podstawowe funkcje CR(zmienna, typ id)
public interface MovieRepository extends CrudRepository<Movie, String>
{
    
    
}
