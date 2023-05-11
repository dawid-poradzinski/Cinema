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
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private long id;    

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "email", unique = true)
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy = "person", fetch = FetchType.LAZY, targetEntity = Rate.class, cascade = CascadeType.ALL)
    @Getter(AccessLevel.NONE)
    private Set<Rate> rates;

    @JsonIgnore
    @OneToMany(mappedBy = "person", fetch = FetchType.LAZY, targetEntity = Ticket.class, cascade = CascadeType.ALL)
    @Getter(AccessLevel.NONE)
    private Set<Ticket> tickets;

    public Person(){};

}
