package cinema.tickets.booking.cinematicketsbooking.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.tickets.booking.cinematicketsbooking.api.exception.UserAlreadyExistsException;
import cinema.tickets.booking.cinematicketsbooking.api.model.response.LoginResponse;
import cinema.tickets.booking.cinematicketsbooking.api.model.send.LoginBody;
import cinema.tickets.booking.cinematicketsbooking.api.model.send.RegistrationBody;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;
import cinema.tickets.booking.cinematicketsbooking.sql.service.PersonPrivateService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    public PersonPrivateService personPrivateService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegistrationBody registrationBody) {

        try {
            personPrivateService.registerPerson(registrationBody);
            return ResponseEntity.ok().build();
        } catch (UserAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginUser(@Valid @RequestBody LoginBody loginBody) {
        String jwt = personPrivateService.loginPerson(loginBody);
        if(jwt == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }else {
            LoginResponse response = new LoginResponse();
            response.setJwt(jwt);
            return ResponseEntity.ok(response);
        }
    }

    @GetMapping("/me")
    public Person getLoggedPersonProfile(@AuthenticationPrincipal Person person) {
        return person;
    }
}
