package com.cucumber.mavenCucumberPrototype;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Parameter_Handling extends AbstractPageStepDefinition{
	
	WebDriver driver = getWebdriver();
	
	@Given("^I navigate to the \"([^\"]*)\" on the cucumber website$")
	public void navigateToTheCucumberWebsite(String arg1) throws Throwable {
		driver.navigate().to("http://localhost/cucumber/" + arg1);
	}
	
	@Then("^I close parameter handling browser$")
	public void closeParamterHandlingBrowser() throws Throwable {
	    driver.quit();
	}
}
