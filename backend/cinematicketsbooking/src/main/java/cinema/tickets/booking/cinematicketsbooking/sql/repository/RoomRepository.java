package cinema.tickets.booking.cinematicketsbooking.sql.repository;

import org.springframework.data.repository.CrudRepository;

import cinema.tickets.booking.cinematicketsbooking.sql.model.Room;

public interface RoomRepository extends CrudRepository<Room, Long>{
    
}
