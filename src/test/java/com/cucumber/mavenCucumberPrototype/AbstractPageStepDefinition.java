package com.cucumber.mavenCucumberPrototype;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class AbstractPageStepDefinition {
	protected static WebDriver webdriver;

	public WebDriver getWebdriver() {
		//web driver is null or webdriver.quit (not webdriver.close)
		if(webdriver==null || ((RemoteWebDriver)webdriver).getSessionId() == null){
			webdriver = new FirefoxDriver();
		}
		return webdriver;
	}
}
