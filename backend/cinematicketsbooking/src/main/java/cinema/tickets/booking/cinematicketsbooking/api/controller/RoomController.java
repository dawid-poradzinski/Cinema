package cinema.tickets.booking.cinematicketsbooking.api.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import cinema.tickets.booking.cinematicketsbooking.api.exception.RoomDoesntExistException;
import cinema.tickets.booking.cinematicketsbooking.sql.model.Room;
import cinema.tickets.booking.cinematicketsbooking.sql.service.RoomService;

@Controller
@RequestMapping("/room")
public class RoomController {
    
    private RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping("/{id}/get")
    public ResponseEntity<Room> getRoom(@PathVariable Long id) {
        Room room = roomService.getById(id);
        if(room != null) {
            return ResponseEntity.ok(room);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @GetMapping("/all/get")
    public ResponseEntity<List<Room>> getRooms() {
        List<Room> rooms = roomService.getAllRooms();

        if(rooms.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(rooms);
    }
    
    @PutMapping("/add")
    public ResponseEntity<Room> addRoom(@RequestBody Room room) {

        try {
            return ResponseEntity.ok(roomService.addRoom(room));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }

    @DeleteMapping("/{id}/delete")
    public ResponseEntity<Room> deleteRoom(@PathVariable Long id){
       
        Room room;
        try {
            room = roomService.deleteRoom(id);
            return ResponseEntity.ok(room);
        } catch (RoomDoesntExistException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
