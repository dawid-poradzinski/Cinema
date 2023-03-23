package cinema.tickets.booking.cinematicketsbooking.api.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

//  
//  Przyjmuje:
// {
//  "username" : String
//  "password" : String
// }
// Zwraca:
// {
//  "jwt" : String 
// }
// 

@Getter
public class LoginBody {

    @NotNull
    @NotBlank
    private String username;
    @NotNull
    @NotBlank
    private String password;

}
