$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "User open webside purplematrix",
  "description": "",
  "id": "user-open-webside-purplematrix",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 6564639100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user open purplematrix home page",
  "description": "",
  "id": "user-open-webside-purplematrix;user-open-purplematrix-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user click on Services",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.userClickOnServices()"
});
formatter.result({
  "duration": 208188200,
  "status": "passed"
});
formatter.after({
  "duration": 61000,
  "status": "passed"
});
});