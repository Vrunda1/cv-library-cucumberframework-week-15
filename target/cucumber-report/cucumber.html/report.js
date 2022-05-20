$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job search functionality",
  "description": "",
  "id": "job-search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should search job successfully",
  "description": "",
  "id": "job-search-functionality;user-should-search-job-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select distance \"\u003cdistance\u003e\"\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter salaryMin \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select jobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "job-search-functionality;user-should-search-job-successfully;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "job-search-functionality;user-should-search-job-successfully;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "5",
        "30000",
        "500000",
        "annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "job-search-functionality;user-should-search-job-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3844801600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should search job successfully",
  "description": "",
  "id": "job-search-functionality;user-should-search-job-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select distance \"5\"\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "enter salaryMin \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select salaryType \"annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 86604900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 20273703100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchTest.iEnterLocation(String)"
});
formatter.result({
  "duration": 186817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iSelectDistance(String)"
});
formatter.result({
  "duration": 75014400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 311827900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSearchTest.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 254704000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 17
    }
  ],
  "location": "JobSearchTest.enterSalaryMin(String)"
});
formatter.result({
  "duration": 45002000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "annum",
      "offset": 21
    }
  ],
  "location": "JobSearchTest.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 31867400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 16
    }
  ],
  "location": "JobSearchTest.selectJobType(String)"
});
formatter.result({
  "duration": 56681100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchTest.clickOnFindJobsButton()"
});
formatter.result({
  "duration": 72618700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 29
    }
  ],
  "location": "JobSearchTest.iShouldSeeTheTheResult(String)"
});
formatter.result({
  "duration": 2978556900,
  "status": "passed"
});
formatter.after({
  "duration": 674786400,
  "status": "passed"
});
});