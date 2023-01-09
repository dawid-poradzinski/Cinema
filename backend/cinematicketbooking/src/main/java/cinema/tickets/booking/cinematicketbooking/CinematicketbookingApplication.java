package cinema.tickets.booking.cinematicketbooking;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CinematicketbookingApplication
{

	public static void main(String[] args)
	{
		SpringApplication.run(CinematicketbookingApplication.class, args);
	}

	@RequestMapping("/people")
	public String showPeople()
	{
		return Arrays.asList("Przemek","Tomek","Kacper").toString();
	}
	
}
