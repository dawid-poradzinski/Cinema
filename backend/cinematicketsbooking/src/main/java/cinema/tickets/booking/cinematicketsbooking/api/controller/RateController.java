package cinema.tickets.booking.cinematicketsbooking.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Rate;
import cinema.tickets.booking.cinematicketsbooking.sql.service.RateService;

@RestController
@RequestMapping("/rate")
public class RateController {
    
    private RateService rateService;

    public RateController(RateService rateService) {
        this.rateService = rateService;
    }

    @GetMapping("/get/single/{rateId}")
    public Rate rate(@PathVariable long rateId) {
        return rateService.getRate(rateId);
    }
}
