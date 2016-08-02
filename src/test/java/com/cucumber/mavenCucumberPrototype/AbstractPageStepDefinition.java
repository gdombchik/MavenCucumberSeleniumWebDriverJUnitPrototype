package com.cucumber.mavenCucumberPrototype;

import java.io.File;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

public class AbstractPageStepDefinition {
	protected static WebDriver webdriver;

	public WebDriver getWebdriver() {
		//web driver is null or webdriver.quit (not webdriver.close)
		//if(webdriver==null || (webdriver instanceof RemoteWebDriver && ((RemoteWebDriver)webdriver).getSessionId() == null)){
			//webdriver = new HtmlUnitDriver(BrowserVersion.BEST_SUPPORTED,true); //FIREFOX_38			
			//webdriver = new HtmlUnitDriver(BrowserVersion.FIREFOX_45,true);
			//webdriver = new HtmlUnitDriver(BrowserVersion.CHROME,true);
			//webdriver = new ChromeDriver();
		
	    //String binary = System.getProperty("phantomjs.binary");
		    File src = new File("/Users/gregorydombchik/Downloads/phantomjs-2.1.1-macosx/bin/phantomjs");
		    System.setProperty("phantomjs.binary.path", src.getAbsolutePath());
			webdriver = new PhantomJSDriver();
		//}
		return webdriver;
	}
}
