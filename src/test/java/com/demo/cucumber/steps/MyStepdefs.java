package com.demo.cucumber.steps;

import com.demo.cucumber.pages.HomePage;
import cucumber.api.java.en.Given;

public class MyStepdefs {
    @Given("^user click on Services$")
    public void userClickOnServices() {
        new HomePage().clickOnservices();
    }




}
