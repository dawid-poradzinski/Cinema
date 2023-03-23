package cinema.tickets.booking.cinematicketsbooking.api.model;

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

    private String username;
    private String password;

}
