package cinema.tickets.booking.cinematicketsbooking.api.security;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.exceptions.JWTDecodeException;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.PersonRepository;
import cinema.tickets.booking.cinematicketsbooking.sql.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTRequestFilter extends OncePerRequestFilter{

    private JWTService jwtService;
    private PersonRepository personRepository;

    public JWTRequestFilter(JWTService jwtService, PersonRepository personRepository) {
        this.jwtService = jwtService;
        this.personRepository = personRepository;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        
        String tokenHeader = request.getHeader("Authorization");
        if(tokenHeader != null && tokenHeader.startsWith("Bearer ")) {
            String token = tokenHeader.substring(7);

            try {

                String username = jwtService.getUsername(token);
                Optional<Person> opPerson = personRepository.findByUsernameIgnoreCase(username);
                if(opPerson.isPresent()) {
                    Person person = opPerson.get();
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(person, null, new ArrayList<>());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }

            } catch (JWTDecodeException e) {
                
            }
        }
        filterChain.doFilter(request, response);
    }
    
}
