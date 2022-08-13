package com.example.demo.controller;
import com.example.demo.model.CBT;
import com.example.demo.service.CBTService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CBTController {

    private final CBTService CBTService;

    public CBTController(CBTService CBTService) {
        this.CBTService = CBTService;
    }

    @PostMapping("/api/cbt")
    public ResponseEntity<Void> createACBT(@RequestBody CBT cbt) {
        try {
            CBTService.createACBT(cbt);
            return ResponseEntity.created(null).build();
        } catch (Exception e) {
            System.out.println("Could not create...");
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/api/cbt")
    public ResponseEntity<List<CBT>> getAll() {
        try {
            List<CBT> all = CBTService.getAll();
            return new ResponseEntity<>(all, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Could not fetch...");
            return ResponseEntity.badRequest().build();
        }
    }
}
