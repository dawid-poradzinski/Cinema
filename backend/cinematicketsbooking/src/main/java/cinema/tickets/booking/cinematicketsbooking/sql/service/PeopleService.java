package cinema.tickets.booking.cinematicketsbooking.sql.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.api.exception.UserAlreadyExistsException;
import cinema.tickets.booking.cinematicketsbooking.api.model.RegistrationBody;
import cinema.tickets.booking.cinematicketsbooking.sql.model.People;
import cinema.tickets.booking.cinematicketsbooking.sql.model.PeoplePrivate;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.PeopleRepository;

@Service
public class PeopleService {

    @Autowired
    private PeopleRepository peopleRepository;

    public People registerPeople(RegistrationBody registrationBody) throws UserAlreadyExistsException{

        if(peopleRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
            ||  peopleRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()    
        ){
            throw new UserAlreadyExistsException();
        }

        People user = new People();
        user.setEmail(registrationBody.getEmail());
        user.setFirstName(registrationBody.getFirstName());
        user.setUsername(registrationBody.getUsername());

        PeoplePrivate pplPrivate = new PeoplePrivate();
        // TODO zrobić szyfrowanie hasła!
        pplPrivate.setPassword(registrationBody.getPassword());

        user.setPeoplePrivate(pplPrivate);

        return peopleRepository.save(user);
    }
}
