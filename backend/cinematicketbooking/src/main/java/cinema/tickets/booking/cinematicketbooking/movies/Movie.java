package cinema.tickets.booking.cinematicketbooking.movies;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

// Przekazanie, że jest to rzecz z bazy
@Entity
public class Movie
{
    
    // główny klucz
    @Id
    private String id;
    private String name;
    private String description;
    
    public Movie(String id, String name, String description)
    {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    public String getId()
    {
        return id;
    }

    public void setId(String id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
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
