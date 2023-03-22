package cinema.tickets.booking.cinematicketsbooking.sql.model;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity(name = "people")
public class People {
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

    @OneToMany(mappedBy = "people", fetch = FetchType.LAZY, targetEntity = Rate.class)
    private Set<Rate> rates;

    @OneToMany(mappedBy = "people", fetch = FetchType.LAZY, targetEntity = Ticket.class)
    private Set<Ticket> tickets;

    @OneToOne(mappedBy = "people", fetch = FetchType.LAZY, cascade = CascadeType.ALL ,targetEntity = PeoplePrivate.class)
    private PeoplePrivate peoplePrivate;

    public void setPeoplePrivate(PeoplePrivate peoplePrivate){
        this.peoplePrivate = peoplePrivate;
        this.peoplePrivate.setPeople(this);
    }
}
