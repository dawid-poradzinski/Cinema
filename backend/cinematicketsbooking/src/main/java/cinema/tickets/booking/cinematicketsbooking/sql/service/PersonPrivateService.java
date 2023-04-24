package cinema.tickets.booking.cinematicketsbooking.sql.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.api.exception.UserAlreadyExistsException;
import cinema.tickets.booking.cinematicketsbooking.api.model.send.LoginBody;
import cinema.tickets.booking.cinematicketsbooking.api.model.send.RegistrationBody;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;
import cinema.tickets.booking.cinematicketsbooking.sql.model.PersonPrivate;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.PersonPrivateRepository;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.PersonRepository;

@Service
public class PersonPrivateService {


    private PersonRepository personRepository;
    private PersonPrivateRepository personPrivateRepository;
    private EncryptionService encryptionService;
    private JWTService jwtService;

    public PersonPrivateService(PersonRepository personRepository, PersonPrivateRepository personPrivateRepository, EncryptionService encryptionService, JWTService jwtService) {
        this.personRepository = personRepository;
        this.personPrivateRepository = personPrivateRepository;
        this.encryptionService = encryptionService;
        this.jwtService = jwtService;
    }

    public PersonPrivate registerPerson(RegistrationBody registrationBody) throws UserAlreadyExistsException{

        if(personRepository.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()
            ||  personRepository.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent()    
        ){
            throw new UserAlreadyExistsException();
        }

        Person person = new Person();
        person.setEmail(registrationBody.getEmail());
        person.setFirstName(registrationBody.getFirstName());
        person.setUsername(registrationBody.getUsername());

        PersonPrivate personPrivate = new PersonPrivate();

        personPrivate.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));

        personPrivate.setPerson(person);

        return personPrivateRepository.save(personPrivate);
    }

    public String loginPerson(LoginBody loginBody) {
        Optional<Person> opPerson = personRepository.findByUsernameOrEmailIgnoreCase(loginBody.getUsernameOrEmail());

        if(opPerson.isPresent()){
            Person person = opPerson.get();

            PersonPrivate personPrivate;

            personPrivate = personPrivateRepository.findById(person.getId()).orElse(null);

            if(encryptionService.verifyPassword(loginBody.getPassword(), personPrivate.getPassword())) {
                return jwtService.generateJWT(person);
            }
        }

        return null;
    }
}
