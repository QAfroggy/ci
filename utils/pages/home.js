//selectors

const selectors = {
homePage: '#b2indexPage',
logo: '[data-testid="header-booking-logo"]',
navigation: '[data-testid="header-xpb"]',
listItemsNavigation: '[data-testid="header-xpb"] div ul li '
}








//expected

const expected = {

}





//functions
const openPage = async ()=>  await browser.url("/")




export default {
    selectors,
    expected,
    openPage

}