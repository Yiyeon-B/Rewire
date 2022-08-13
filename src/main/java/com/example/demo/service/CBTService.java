package com.example.demo.service;
import com.example.demo.model.CBT;
import com.example.demo.repository.CBTRepository;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class CBTService {

    private final CBTRepository CBTRepository;

    public CBTService(CBTRepository CBTRepository) {
        this.CBTRepository = CBTRepository;
    }

    public void saveThought(CBT thoughts) {
        this.CBTRepository.save(thoughts);
    }

    public void createACBT(CBT thoughts) {
        CBTRepository.save(thoughts);
    }

    public List<CBT> getAll() {
        List<CBT> thoughts = new ArrayList<CBT>();
        CBTRepository.findAll().forEach(thoughts::add);
        return thoughts;
    }
}
