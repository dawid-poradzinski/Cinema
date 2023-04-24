package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
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

    @Column(name = "image_link")
    private String imageLink;

    @JsonIgnore
    @OneToMany(mappedBy = "movie", targetEntity = Rate.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Movie> rates;

    @JsonIgnore
    @OneToMany(mappedBy = "movie", targetEntity = Film.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Film> films;

    @Transient
    private Double rating;

    @Transient
    private Long numberOfRates;
    
    public Movie() {};

}
