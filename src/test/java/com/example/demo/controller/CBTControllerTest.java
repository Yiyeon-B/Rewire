package com.example.demo.controller;

import com.example.demo.model.CBT;
import com.example.demo.service.CBTService;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@WebMvcTest
public class CBTControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CBTService cbtService;

    @Test
    public void getAllCBTSuccessfully() throws Exception {
        String firstThought = "first";
        String secondThought = "second";
        String thirdThought = "third";
        String fourthThought = "fourth";
        CBT thoughts = new CBT(firstThought, secondThought, thirdThought, fourthThought);
        List<CBT> cbtList = new ArrayList<>();
        cbtList.add(thoughts);
        when(cbtService.getAll()).thenReturn(cbtList);

        mockMvc.perform(get("/api/cbt")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].firstThought", is("first")))
                .andExpect(jsonPath("$[0].secondThought", is("second")))
                .andExpect(jsonPath("$[0].thirdThought", is("third")))
                .andExpect(jsonPath("$[0].fourthThought", is("fourth")));

        verify(cbtService, times(1)).getAll();
    }
    @Test
    public void getAllCBTUnsuccessfully() throws Exception {
        when(cbtService.getAll()).thenThrow();
        mockMvc.perform(get("/api/cbt")
                .content("Hi"))
                .andExpect(status().isBadRequest());

    }

    @Test
    public void saveCBTSuccessfullyGson() throws Exception {
        String firstThought = "first";
        String secondThought = "second";
        String thirdThought = "third";
        String fourthThought = "fourth";
        CBT cbt = new CBT(firstThought, secondThought, thirdThought, fourthThought);
        Gson gson = new Gson();
        String cbtAsJson = gson.toJson(cbt);
        mockMvc.perform(post("/api/cbt")
                .contentType(MediaType.APPLICATION_JSON)
                .content(cbtAsJson))
                .andExpect(status().isCreated());
        verify(cbtService, times(1)).createACBT(refEq(cbt));
    }

    @Test
    public void saveCBTUnsuccessfully() throws Exception {
        mockMvc.perform(post("/api/cbt")
                .contentType(MediaType.APPLICATION_JSON)
                .content("Hi"))
                .andExpect(status().isBadRequest());
    }
}
