package cinema.tickets.booking.cinematicketbooking.movies;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

// Przekazanie, że jest to rzecz z bazy
@Entity(name = "Movie") //Podobno wypada sprecyzować nazwę tabeli
public class Movie
{
    // główny klucz
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // Można tworzyć własne poprzez @SequenceGenerator (o ile się zwiększa itd)
    @Column(name = "id", updatable = false) //Opis poszczególnych kolumn. Nie musi tego być. Wybieramy nazwę i że nie może być updatowana kolumna id
    private Integer id;

    @Column(name = "title", nullable = false, columnDefinition = "TEXT")
    private String title;

    @Column(name = "description", nullable = false, columnDefinition = "JSON")
    private String description;
    
    public Movie() {};

    public Movie(String title, String description)
    {
        this.title = title;
        this.description = description;
    }

    public Movie(int id, String title, String description)
    {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

}
