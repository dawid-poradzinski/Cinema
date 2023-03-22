package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name = "movie")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", unique = true)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "movie", targetEntity = Rate.class, fetch = FetchType.LAZY)
    private Set<Rate> rates;

    @OneToMany(mappedBy = "movie", targetEntity = Film.class, fetch = FetchType.LAZY)
    private Set<Film> films;
}
