package cinema.tickets.booking.cinematicketsbooking.sql.service;

import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Rate;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.RateRepository;

@Service
public class RateService {
    private RateRepository rateRepository;

    public RateService(RateRepository rateRepository) {
        this.rateRepository = rateRepository;
    }

    public Rate getRate(long rateId) {
        return rateRepository.findById(rateId).orElse(null);
    }
}
