package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CBT {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstThought;
    private String secondThought;
    private String thirdThought;
    private String fourthThought;
    public CBT() {}
    
    public CBT(String firstThought, String secondThought, String thirdThought, String fourthThought) {
        this.firstThought = firstThought;
        this.secondThought = secondThought;
        this.thirdThought = thirdThought;
        this.fourthThought = fourthThought;
    }

    public String getFirstThought() {
        return firstThought;
    }

    public String getSecondThought() {
        return secondThought;
    }

    public String getThirdThought() {
        return thirdThought;
    }

    public String getFourthThought() {
        return fourthThought;
    }

    public void setFirstThought(String firstThought) {
        this.firstThought = firstThought;
    }

    public void setSecondThought(String secondThought) {
        this.secondThought = secondThought;
    }

    public void setThirdThought(String thirdThought) {
        this.thirdThought = thirdThought;
    }

    public void setFourthThought(String fourthThought) {
        this.fourthThought = fourthThought;
    }
}

