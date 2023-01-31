package cinema.tickets.booking.cinematicketbooking.movies;

import org.springframework.data.repository.CrudRepository;

// interface dla JPA, aby tworzyć podstawowe funkcje CR(zmienna, typ id) wbudowane komędy SQL
// hold movie records
public interface MovieRepository extends CrudRepository<Movie, Integer>
{
    Movie findByTitle(String title);
}
