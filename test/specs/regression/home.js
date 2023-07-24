import Home from '../../../utils/pages/home.js'

describe("Elements", async()=>{

before(async()=>{
    Home.openPage();
});

it("Home page is visible", async()=>{
    const page = await $(Home.selectors.homePage);
    await expect(page).toBePresent();
});
// it("Logo  is visible", async()=>{
//     const page = await $(Home.selectors.logo);
//     await expect(page).toBePresent();
// });
// it("Logo  has aria-label 'Booking.com'", async()=>{
//     const page = await $(Home.selectors.logo);
//     await expect(page).toHaveAttribute('aria-label', 'Booking.com');
// });


// it("Navigation is visible", async()=>{
//     const page = await $(Home.selectors.navigation);
//     await expect(page).toBePresent();
// });
// it("Navigation has ul ", async()=>{
//     const list = await $$(Home.selectors.listItemsNavigation);
//     console.log("=======================")
//     console.log("----------> ", + list.length)
//    await expect(list).toHaveChildren({ gte: 1 });
// });
// //test



});
console.log("hello")