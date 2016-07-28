package com.cucumber.mavenCucumberPrototype;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.gargoylesoftware.htmlunit.BrowserVersion;

public class AbstractPageStepDefinition {
	protected static WebDriver webdriver;

	public WebDriver getWebdriver() {
		//web driver is null or webdriver.quit (not webdriver.close)
		if(webdriver==null || (webdriver instanceof RemoteWebDriver && ((RemoteWebDriver)webdriver).getSessionId() == null)){
			//webdriver = new HtmlUnitDriver(BrowserVersion.BEST_SUPPORTED,true); //FIREFOX_38			
			//webdriver = new HtmlUnitDriver(BrowserVersion.FIREFOX_45,true);
			webdriver = new HtmlUnitDriver(BrowserVersion.CHROME,true);
			//webdriver = new ChromeDriver();
		}
		return webdriver;
	}
}
