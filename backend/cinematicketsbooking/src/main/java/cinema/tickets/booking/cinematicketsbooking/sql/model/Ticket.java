package cinema.tickets.booking.cinematicketsbooking.sql.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private long id;
    @Column(name = "salt")
    private String salt;
    @Column(name = "seat")
    private int seat;
    @Column(name = "used")
    private boolean used;
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Film.class)
    @JoinColumn(name = "film")
    private Film film;
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Person.class)
    @JoinColumn(name = "people")
    private Person person;
}
