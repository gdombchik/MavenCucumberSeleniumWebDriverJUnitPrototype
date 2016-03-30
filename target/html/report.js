$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormTest.feature");
formatter.feature({
  "line": 1,
  "name": "Test check boxes, drop downs, and radio buttons of a form",
  "description": "",
  "id": "test-check-boxes,-drop-downs,-and-radio-buttons-of-a-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2253710271,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I navigate to the \"form.php\" page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "form.php",
      "offset": 19
    }
  ],
  "location": "FormTest.navigateToTheCucumberWebsite(String)"
});
formatter.result({
  "duration": 286680993,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Test Form",
  "description": "",
  "id": "test-check-boxes,-drop-downs,-and-radio-buttons-of-a-form;test-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@formTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I populate the from",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close form handling browser",
  "keyword": "And "
});
formatter.match({
  "location": "FormTest.populateForm()"
});
formatter.result({
  "duration": 389350916,
  "status": "passed"
});
formatter.match({
  "location": "FormTest.closeParamterHandlingBrowser()"
});
formatter.result({
  "duration": 74785900,
  "status": "passed"
});
formatter.after({
  "duration": 65682,
  "status": "passed"
});
formatter.uri("contactForm.feature");
formatter.feature({
  "line": 1,
  "name": "Contact Form Test",
  "description": "",
  "id": "contact-form-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1627064119,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "My First Test",
  "description": "",
  "id": "contact-form-test;my-first-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ContactForm"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the cucumber website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fill out the form",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ],
      "line": 7
    },
    {
      "cells": [
        "name",
        "Gregory Dombchik"
      ],
      "line": 8
    },
    {
      "cells": [
        "email",
        "greg@gregorydombchik.com"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be on the welcome page for contact form",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "location": "ContactForm.navigateToTheCucumberWebsite()"
});
formatter.result({
  "duration": 133371955,
  "status": "passed"
});
formatter.match({
  "location": "ContactForm.fillOutTheForm(DataTable)"
});
formatter.result({
  "duration": 256873152,
  "status": "passed"
});
formatter.match({
  "location": "ContactForm.shouldBeOnTheWelcomePage()"
});
formatter.result({
  "duration": 30722225,
  "status": "passed"
});
formatter.match({
  "location": "ContactForm.closeBrowser()"
});
formatter.result({
  "duration": 65917160,
  "status": "passed"
});
formatter.after({
  "duration": 61518,
  "status": "passed"
});
formatter.uri("parameterHandling.feature");
formatter.feature({
  "line": 1,
  "name": "Parameter Handling Test",
  "description": "",
  "id": "parameter-handling-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1568942406,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "My Parameter Handling Test",
  "description": "",
  "id": "parameter-handling-test;my-parameter-handling-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@parameterHandling"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \"index.html\" on the cucumber website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I close parameter handling browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "index.html",
      "offset": 19
    }
  ],
  "location": "Parameter_Handling.navigateToTheCucumberWebsite(String)"
});
formatter.result({
  "duration": 125826694,
  "status": "passed"
});
formatter.match({
  "location": "Parameter_Handling.closeParamterHandlingBrowser()"
});
formatter.result({
  "duration": 64480599,
  "status": "passed"
});
formatter.after({
  "duration": 38780,
  "status": "passed"
});
formatter.uri("scenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Scenario Outline Test",
  "description": "",
  "id": "scenario-outline-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "My Scenario Outline Test",
  "description": "",
  "id": "scenario-outline-test;my-scenario-outline-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tagForScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the \u003clink\u003e page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should be on the \u003cvalue\u003e page",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 8,
      "value": "# And I close scenario outline browser"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "id": "scenario-outline-test;my-scenario-outline-test;",
  "rows": [
    {
      "cells": [
        "link",
        "value"
      ],
      "line": 10,
      "id": "scenario-outline-test;my-scenario-outline-test;;1"
    },
    {
      "cells": [
        "index.html",
        "Home"
      ],
      "line": 11,
      "id": "scenario-outline-test;my-scenario-outline-test;;2"
    },
    {
      "cells": [
        "another_page.html",
        "Another Page"
      ],
      "line": 12,
      "id": "scenario-outline-test;my-scenario-outline-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1382581451,
  "status": "passed"
});
formatter.before({
  "duration": 40622,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "My Scenario Outline Test",
  "description": "",
  "id": "scenario-outline-test;my-scenario-outline-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tagForScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the index.html page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should be on the Home page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "index.html",
      "offset": 18
    }
  ],
  "location": "ScenarioOutline.navigateToPage(String)"
});
formatter.result({
  "duration": 130907059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 19
    }
  ],
  "location": "ScenarioOutline.validateTitleOfPage(String)"
});
formatter.result({
  "duration": 9498116,
  "status": "passed"
});
formatter.after({
  "duration": 39211,
  "status": "passed"
});
formatter.after({
  "duration": 35532,
  "status": "passed"
});
formatter.before({
  "duration": 68675,
  "status": "passed"
});
formatter.before({
  "duration": 36810,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "My Scenario Outline Test",
  "description": "",
  "id": "scenario-outline-test;my-scenario-outline-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tagForScenarioOutline"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigate to the another_page.html page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should be on the Another Page page",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "another_page.html",
      "offset": 18
    }
  ],
  "location": "ScenarioOutline.navigateToPage(String)"
});
formatter.result({
  "duration": 46068744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Another Page",
      "offset": 19
    }
  ],
  "location": "ScenarioOutline.validateTitleOfPage(String)"
});
formatter.result({
  "duration": 56007205,
  "status": "passed"
});
formatter.after({
  "duration": 37269,
  "status": "passed"
});
formatter.after({
  "duration": 30310,
  "status": "passed"
});
formatter.uri("zooTest.feature");
formatter.feature({
  "line": 1,
  "name": "To test the high level functionality of the Zoo site",
  "description": "",
  "id": "to-test-the-high-level-functionality-of-the-zoo-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 68998,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the zoo site",
  "keyword": "Given "
});
formatter.match({
  "location": "ZooTestCucumberAndJunit.iAmOnTheZooSite()"
});
formatter.result({
  "duration": 251543921,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "To populate the contact form",
  "description": "",
  "id": "to-test-the-high-level-functionality-of-the-zoo-site;to-populate-the-contact-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tagForZoo"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \"Contact\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#And I enter \"Name test\" into the name field"
    },
    {
      "line": 10,
      "value": "#And I enter \"Address test\" into the address field"
    },
    {
      "line": 11,
      "value": "#And I enter \"Postcode test\" into the postcode field"
    },
    {
      "line": 12,
      "value": "#And I enter \"Email test\"  into the email field"
    }
  ],
  "line": 13,
  "name": "I populate the form",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I submit the contact form",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I check I am on the confirmation page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 12
    }
  ],
  "location": "ZooTestCucumberAndJunit.iClickOn(String)"
});
formatter.result({
  "duration": 510006837,
  "status": "passed"
});
formatter.match({
  "location": "ZooTestCucumberAndJunit.iPopulateTheForm()"
});
formatter.result({
  "duration": 199751576,
  "status": "passed"
});
formatter.match({
  "location": "ZooTestCucumberAndJunit.iSubmitTheContactForm()"
});
formatter.result({
  "duration": 178517332,
  "status": "passed"
});
formatter.match({
  "location": "ZooTestCucumberAndJunit.iCheckIAmOnTheConfirmationPage()"
});
formatter.result({
  "duration": 35365838,
  "status": "passed"
});
formatter.match({
  "location": "ZooTestCucumberAndJunit.iCloseTheBrowser()"
});
formatter.result({
  "duration": 6855707,
  "status": "passed"
});
formatter.after({
  "duration": 35668,
  "status": "passed"
});
});