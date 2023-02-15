export class HomePage {

    homeGrid = ".MuiButtonBase-root.MuiTab-root.jss7.MuiTab-textColorInherit";
    apiDashBoardList = "div[id='Menu.Dashboard/dashboard']";
    mainPage = "a[title='Data Hub home']";
    acceptCookies = "#ccc-notify-accept";
    appFrame = "iframe[id=\"Your project: 'Test Project'\"]";
    menuButton = "BUTTON[ARIA-LABEL='toggle navigation menu']";
    apiDashBoard = "div[id='Menu.api']";
    backMenuBtn = "div[id='Menu.Back']";
    docsLink ="div[id='Menu.Documentation']";
    docsMenuList = "div[class='MuiButtonBase-root MuiListItem-root jss75 MuiListItem-gutters MuiListItem-button']";

    homeGridElementsClick(i) {
        return cy.get(this.appFrame).find(this.homeGrid).eq(i).click();
    }
    menuClick() {
        return cy.get(this.menuButton).click();
    }
    apiDashBoardPage() {
        return cy.get(this.apiDashBoard).should('be.visible').click();
    }
    apiDashBoardListVisible() {
        return cy.get(this.apiDashBoardList).should('be.visible');
    }
    
    mainPageDisplayed() {
        return cy.get(this.mainPage).should('be.visible') ;
    }
    acceptCookiesDisplayed() {
        return cy.get(this.acceptCookies).click();
    }
    clickOnBackMenuBtn() {
        return cy.get(this.backMenuBtn).click();
    }
    clickOndocsLink(){
        return cy.get(this.docsLink).click();
    }
    docsListDisplayed(){
    return cy.get(this.docsMenuList).should('have.length', 12);
    }
}