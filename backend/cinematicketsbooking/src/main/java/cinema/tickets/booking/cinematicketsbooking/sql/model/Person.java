package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.util.Set;

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

    @OneToMany(mappedBy = "person", fetch = FetchType.LAZY, targetEntity = Rate.class)
    @Getter(AccessLevel.NONE)
    private Set<Rate> rates;

    @OneToMany(mappedBy = "person", fetch = FetchType.LAZY, targetEntity = Ticket.class)
    @Getter(AccessLevel.NONE)
    private Set<Ticket> tickets;

    public Person(){};

}
