package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitleField;
    @CacheLookup
    @FindBy (id = "location")
    WebElement locationField;
    @CacheLookup
    @FindBy (id = "distance")
    WebElement distanceDropDown;
    @CacheLookup
    @FindBy (id = "toggle-hp-search")
    WebElement moreSearchOptions;
    @CacheLookup
    @FindBy (id = "salarymin")
    WebElement salaryMin;
    @CacheLookup
    @FindBy (id = "salarymax")
    WebElement salaryMax;
    @CacheLookup
    @FindBy (xpath= "//select[@id='salarytype']")
    WebElement salaryTypeDropDownMenu;
    @CacheLookup
    @FindBy (xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;
    @CacheLookup
    @FindBy (id = "hp-search-btn")
    WebElement findJobsButton;
    @CacheLookup
    @FindBy(xpath = "//*[contains(text(),'Accept')]")
    WebElement acceptCookis;

    public void setAcceptCookis(){
        clickOnElement(acceptCookis);
        log.info("Clicking on AcceptCookis"+ acceptCookis.toString()+ "<br>");
    }


    public void enterJobTitle(String jobTitle) {
        sendTextToElement(jobTitleField, jobTitle);
        log.info("Enter JobTitle"+jobTitle+ " to email field "+jobTitleField.toString() + "<br>");
    }

    public void enterLocation(String location){
        sendTextToElement(locationField, location);
        log.info("Enter Location"+location+ " to email field "+locationField.toString() + "<br>");
    }
    public void selectDistanceFrom(String dist) {
        selectByValueFromDropDown(distanceDropDown, dist);
        log.info("Selecting Distance"+dist+" from dropdown "+distanceDropDown.toString() + "<br>");
    }
    public void clickOnMoreSearchOptionLink() {

        clickOnElement(moreSearchOptions);
        log.info("Clicking on MoreSearchOption"+ moreSearchOptions.toString()+ "<br>");
    }
    public void enterMinSalary(String minSalary) {

        sendTextToElement(salaryMin, minSalary);
        log.info("Enter MinSalary"+minSalary+ " to email field "+salaryMin.toString() + "<br>");
    }
    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);
        log.info("Enter MaxSalary"+maxSalary+ " to email field "+salaryMax.toString() + "<br>");
    }
    public void selectSalaryType(String salaryType) {
        selectByValueFromDropDown(salaryTypeDropDownMenu, salaryType);
        log.info("Selecting SalaryType"+salaryType+" from dropdown "+salaryTypeDropDownMenu.toString() + "<br>");
    }
    public void clickOnAcceptCookie(){
        switchToiFrame("gdpr-consent-notice");
        clickOnElement(acceptCookis);
        log.info("Clicking on Accept Cookies : " + acceptCookis.toString());
    }
    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        log.info("Selecting JobType"+jobType+" from dropdown "+jobTypeDropDown.toString() + "<br>");
    }
    public void clickOnFindJobsButton() {
        clickOnElement(findJobsButton);
        log.info("Clicking on FindJobsButton"+ findJobsButton.toString()+ "<br>");
    }

}
