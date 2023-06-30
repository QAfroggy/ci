//selectors

const selectors = {
    page: "#page",
    logo: ".logo img",
    bunner: '[aria-label="Szanowny Widzu Heliosa,"]',
    akceptBtn: '#onetrust-accept-btn-handler',
    zaawansowanieBtn:'[id="onetrust-pc-btn-handler"]',
    h2UstawnieniaZaawansowania: "#ot-pc-title",
    savePreference: ".save-preference-btn-handler onetrust-close-btn-handler",
    ustawieniaZaawansowania: '[aria-label="Ustawienia zaawansowane"]',
    

}

//expected

const expected = {

    h2UstawnieniaZaawansowaniaText: "Ustawienia zaawansowane",
    potwierdzenieMoichWyborów: "Potwierdzenie moich wyborów"

}

//function

const openPage = async()=> await browser.url('/');
const accept = async ()=>await $(akceptBtn).click()
const zaawansowane = async ()=> await $(zaawansowanieBtn)





export default{
    ...selectors,
    expected,
    openPage,
    accept,
    zaawansowane


}