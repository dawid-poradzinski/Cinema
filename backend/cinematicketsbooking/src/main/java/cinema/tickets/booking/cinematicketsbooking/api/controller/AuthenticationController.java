package cinema.tickets.booking.cinematicketsbooking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.tickets.booking.cinematicketsbooking.api.exception.UserAlreadyExistsException;
import cinema.tickets.booking.cinematicketsbooking.api.model.RegistrationBody;
import cinema.tickets.booking.cinematicketsbooking.sql.service.PeopleService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    public PeopleService peopleService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegistrationBody registrationBody){

        try {
            peopleService.registerPeople(registrationBody);
            return ResponseEntity.ok().build();
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
