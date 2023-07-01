import Home from '../../../utils/pages/home.js'

describe("Elements", async()=>{

before(async()=>{
    Home.openPage();
});

it("Home page is visible", async()=>{
    const page = await $(Home.selectors.homePage);
    await expect(page).toBePresent();
});


});