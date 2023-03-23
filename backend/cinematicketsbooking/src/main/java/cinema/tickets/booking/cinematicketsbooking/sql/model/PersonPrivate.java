package cinema.tickets.booking.cinematicketsbooking.sql.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "person_private")
@Setter
@Getter
public class PersonPrivate {

    @Id
    @Column(name = "id", unique = true)
    private long id;
    
    @Column(name = "password")
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "rank")
    private Rank rank = Rank.USER;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "id")
    private Person person;

    public enum Rank{
        USER,
        WORKER,
        ADMIN,
    }
}
