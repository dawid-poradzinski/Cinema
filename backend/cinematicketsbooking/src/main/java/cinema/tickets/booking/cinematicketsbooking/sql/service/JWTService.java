package cinema.tickets.booking.cinematicketsbooking.sql.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Person;
import jakarta.annotation.PostConstruct;

@Service
public class JWTService {
    
    // Prywatny klucz
    @Value("${jwt.algorithm.key}")
    private String algoritmKey;
    // Kto dał klucz (aby ktoś sam nie dał)
    @Value("${jwt.issuer}")
    private String issuer;
    // Po ilu sekundach klucz wygasa
    @Value("${jwt.expiryInSecond}")
    private int expiryInSecond;

    private Algorithm algorithm;
    private static final String USERNAME_KEY = "USERNAME";

    @PostConstruct
    public void PostConstruct() {
        algorithm = Algorithm.HMAC256(algoritmKey);
    }

    public String generateJWT(Person person) {
        return JWT.create()
        .withClaim(USERNAME_KEY, person.getUsername())
        .withExpiresAt(new Date(System.currentTimeMillis() + (1000 * expiryInSecond)))
        .withIssuer(issuer)
        .sign(algorithm);
    }
}
