package cinema.tickets.booking.cinematicketsbooking.sql.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import cinema.tickets.booking.cinematicketsbooking.api.exception.RoomDoesntExistException;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Room;
import cinema.tickets.booking.cinematicketsbooking.sql.repository.RoomRepository;

@Service
public class RoomService {
    
    private RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllRooms() {
        
        List<Room> roomList = new ArrayList<>();
        
        for(Room room : roomRepository.findAll()) {
            roomList.add(room);
        }

        return roomList;
    }

    public Room getById(Long id) {
        Optional<Room> roomOp = roomRepository.findById(id);

        if(roomOp.isPresent()) {
            return roomOp.get();
        }
        
        return null;
    }

    public Room addRoom(Room room) {
        return roomRepository.save(room);

    
    }

    public Room deleteRoom(Long id) throws RoomDoesntExistException {

        Optional<Room> roomOp = roomRepository.findById(id);

        if(roomOp.isPresent()) {
            roomRepository.deleteById(id);
            return roomOp.get();
        }
        
        throw new RoomDoesntExistException();

    }
}
