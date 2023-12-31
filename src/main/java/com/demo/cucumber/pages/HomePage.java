package com.demo.cucumber.pages;


import com.demo.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@id='menu-main_menu']//li[@id='menu-item-32']")
    WebElement services;

    public void clickOnservices() {
        log.info("Clicking on Accept Cookie : " + services.toString());
        clickOnElement(services);

    }


}



