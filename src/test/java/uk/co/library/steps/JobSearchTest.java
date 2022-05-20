package uk.co.library.steps;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String job){
        new HomePage().clickOnAcceptCookie();
        new HomePage().enterJobTitle(job);
    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String place){
        new HomePage().enterLocation(place);
    }

    @And("^I select distance \"([^\"]*)\"'$")
    public void iSelectDistance(String distance){
        new HomePage().selectDistanceFrom(distance);
    }

    @And("^I click on moreSearchOptionsLink$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String min){
        new HomePage().enterMinSalary(min);
    }

    @And("^enter salaryMin \"([^\"]*)\"$")
    public void enterSalaryMin(String max){
        new HomePage().enterMaxSalary(max);
    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String saltype) {
        new HomePage().selectSalaryType(saltype);
    }

    @And("^select jobType \"([^\"]*)\"$")
    public void selectJobType(String type){
        new HomePage().selectJobType(type);
    }

    @And("^click on 'Find Jobs' button$")
    public void clickOnFindJobsButton() {
    new HomePage().clickOnFindJobsButton();
    }

    @Then("^I should see the the result \"([^\"]*)\"$")
    public void iShouldSeeTheTheResult(String text){
   Assert.assertEquals("Cannot navigate to Result page ", text,new ResultPage().getSearchResultText());

}
}
