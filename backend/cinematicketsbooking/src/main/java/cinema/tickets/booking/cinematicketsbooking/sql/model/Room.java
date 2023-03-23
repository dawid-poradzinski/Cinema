package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name = "room")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", unique = true)
    private long id;
    @Column(name = "number_of_seats")
    private long seats;
    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<Film> films;
    
    public Room() {};
}
