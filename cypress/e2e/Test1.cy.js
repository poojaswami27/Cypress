/*url : https://osdatahub.os.uk
Using the URL https://osdatahub.os.uk, verify specific items/objects are loaded onto the page. Navigate
through the header menu including verification steps to confirm that the correct page is showing and that the
page objects are displayed. For the ‘Docs’ page, verify the items on the side menu and verify the links shown
when you expand the listed sections under ‘OS Data Hub documentation’ e.g. ‘OS Downloads API’, ‘OS
Features API’, ‘OS Linked Identifiers API’ etc……*/
import { HomePage } from "../support/HomePage";

describe("Testing page behaviour",() => {
    it("Test case name", () => {
        const hp = new HomePage();
        cy.visit("https://osdatahub.os.uk");
        hp.acceptCookiesDisplayed();
        hp.mainPageDisplayed();
        hp.homeGridElementsClick(1); // 
        if(!hp.apiDashBoardPage()){
            console.log("Failed to open APIDashboard Page");
        }else{
            console.log("succesfully opened APIDashboard Page");
        }



    })
})