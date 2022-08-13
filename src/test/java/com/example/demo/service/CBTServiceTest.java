package com.example.demo.service;

import com.example.demo.model.CBT;
import com.example.demo.repository.CBTRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class CBTServiceTest {
    @Mock
    private CBTRepository CBTRepository;

    @Mock
    private CBTService cbtService;

    @Test
    public void shouldSaveFirstThought() {
        //Unit Test format: AAA
        //Assign
        CBTService CBTService = new CBTService(CBTRepository);
        CBT thoughts = new CBT("first", "second", "third", "fourth");

        //Action
        CBTService.saveThought(thoughts);
        //Assert

        verify(CBTRepository).save(thoughts);
    }
    @Test
    public void shouldRetrieveAThought() {
        CBTService CBTService = new CBTService(CBTRepository);
        CBT thoughts = new CBT("first", "second", "third", "fourth");
        CBTService.saveThought(thoughts);
        cbtService.getAll();
        verify(CBTRepository).save(thoughts);
        verify(cbtService).getAll();
    }
}
