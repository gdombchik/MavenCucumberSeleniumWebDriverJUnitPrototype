package com.cucumber.mavenCucumberPrototype;

import org.openqa.selenium.WebDriver;

import com.cucumber.mavenCucumberPrototype.pageObjectZoo.ContactConfirmationPage;
import com.cucumber.mavenCucumberPrototype.pageObjectZoo.ContactPage;
import com.cucumber.mavenCucumberPrototype.pageObjectZoo.LandingPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

public class ZooTestCucumberAndJunit extends AbstractPageStepDefinition{
	
	WebDriver driver = getWebdriver();
	LandingPage landingPage;
	ContactPage contactPage;
	ContactConfirmationPage contactConfirmationPage;

	@Given("^I am on the zoo site$")
	public void iAmOnTheZooSite() throws Throwable {
	    //webdriver.navigate().to("http://thetestroom.com/webapp/");
		landingPage = new LandingPage(driver).navigateToWebApp();
	}

	@When("^I click on \"([^\"]*)\"$")
	public void iClickOn(String link) throws Throwable {
		//webdriver.findElement(By.id(link.toLowerCase() + "_link")).click();
		contactPage = landingPage.navigateToContactPage(link);
	}

	@When("^I enter \"([^\"]*)\" into the name field$")
	public void iEnterIntoTheNameField(String value) throws Throwable {
	    //webdriver.findElement(By.name("name_field")).sendKeys(value);
		contactPage = contactPage.setNameField(value);
	}

	@When("^I enter \"([^\"]*)\" into the address field$")
	public void iEnterIntoTheAddressField(String value) throws Throwable {
		//webdriver.findElement(By.name("address_field")).sendKeys(value);
		contactPage = contactPage.setAddressField(value);
	}

	@When("^I enter \"([^\"]*)\" into the postcode field$")
	public void iEnterIntoThePostcodeField(String value) throws Throwable {
		//webdriver.findElement(By.name("postcode_field")).sendKeys(value);
		contactPage = contactPage.setPostCode(value);
	}

	@When("^I enter \"([^\"]*)\"  into the email field$")
	public void iEnterIntoTheEmailField(String value) throws Throwable {
		//webdriver.findElement(By.name("email_field")).sendKeys(value);
		contactPage = contactPage.setEmailField(value);
	}
	
	@When("^I populate the form$")
	public void iPopulateTheForm() throws Throwable {
	   contactPage
	   	.setNameField("name")
	   	.setAddressField("address")
	   	.setPostCode("postcode")
	   	.setEmailField("email");
	}

	@When("^I submit the contact form$")
	public void iSubmitTheContactForm() throws Throwable {
		//webdriver.findElement(By.id("submit_message")).click();
		contactConfirmationPage = contactPage.submitForm();
	}

	@Then("^I check I am on the confirmation page$")
	public void iCheckIAmOnTheConfirmationPage() throws Throwable {
		Assert.assertEquals("We have your message", contactConfirmationPage.getPageTitle());
	}

	@Then("^I close the browser$")
	public void iCloseTheBrowser() throws Throwable {
		contactConfirmationPage.closeDriver();
	}
	
}
