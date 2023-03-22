package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.time.LocalDateTime;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity(name = "film")
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", unique = true)
    private long id;

    @Column(name = "date", columnDefinition = "DATE")
    private LocalDateTime date;

    @Column(name = "taken_seats")
    private Set<Integer> takenSeats;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Room.class)
    @JoinColumn(name = "room")
    private Room room;
    
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Movie.class)
    @JoinColumn(name = "movie")
    private Movie movie;

    @OneToMany(mappedBy = "film", fetch = FetchType.LAZY, targetEntity = Ticket.class)
    private Set<Ticket> tickets;
}
