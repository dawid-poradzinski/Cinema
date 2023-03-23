package cinema.tickets.booking.cinematicketsbooking.api.model.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MovieResponse {
    
    private Long id;
    private String title;
    private String description;
    private String imageLink;
    private Double rate;
    private Long numberOfRates;
    
}
