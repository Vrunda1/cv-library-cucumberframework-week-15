Feature: Job search functionality


  Scenario Outline:User should search job successfully
    Given I am on homepage
    When I enter job title "<jobTitle>"
    And  I enter Location "<location>"
    And  I select distance "<distance>"'
    And  I click on moreSearchOptionsLink
    And  I enter salaryMin "<salaryMin>"
    And  enter salaryMin "<salaryMax>"
    And  I select salaryType "<salaryType>"
    And  select jobType "<jobType>"
    And  click on 'Find Jobs' button
    Then I should see the the result "<result>"

    Examples:
      | jobTitle | location           | distance | salaryMin | salaryMax | salaryType | jobType        | result                                      |
      | Tester   | Harrow             | 5        | 30000     | 500000    | annum      | Permanent      | Permanent Tester jobs in Harrow on the Hill |
      | Tester   | Harrow on the Hill | 5        | 300       | 5000      | annum      | Permanent      | Permanent Tester jobs in Harrow on the Hill |
      | Plumber  | London             | 7        | 3000      | 40000     | month      | Contract       | Contract Plumber jobs in London             |
      | Cook     | Cambridge          | 5        | 1000      | 5000      | week       | Part Time      | Part Time Cook jobs in Cambridge            |
      | Nurse    | Essex              | 2        | 80        | 7000      | day        | Contract       | Contract Nurse jobs in Essex                |
      | Teacher  | Oxford             | 5        | 800       | 40000     | annum      | Apprenticeship | Apprenticeship Teacher jobs in Oxford       |










