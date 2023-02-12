export class HomePage {

    homeGrid = ".MuiButtonBase-root.MuiTab-root.jss7.MuiTab-textColorInherit";
    apiDashBoardList = "li[id='Menu.Dashboard/dashboard']";
    mainPage = "a[title='Data Hub home']";
    acceptCookies = "#ccc-notify-accept";
    appFrame = ".aut-iframe";
    menuButton = "BUTTON[ARIA-LABEL='toggle navigation menu']"

    homeGridElementsClick(i) {
        return cy.get(this.appFrame).find(this.homeGrid).eq(i).click();
    }
    menuClick() {
        return cy.get(this.appFrame).find(this.menuButton).eq(i).click();
    }
    apiDashBoardPage() {
        return cy.get(this.appFrame).find(this.apiDashBoardList).should('be.visible');
    }


    mainPageDisplayed() {
        return cy.get(this.mainPage).should('be.visible') ;
    }
    acceptCookiesDisplayed() {
        return cy.get(this.acceptCookies).click();
    }

}