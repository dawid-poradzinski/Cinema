package cinema.tickets.booking.cinematicketsbooking.api.model.send;

import lombok.Getter;

@Getter
public class RateBody {
    private long movieId;
    private Double score;
    private String text;
}
