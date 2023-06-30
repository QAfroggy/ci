describe("Elements", async()=>{

before(async()=>{
    await browser.url("/")
})

it("Home page is visible", async()=>{
    const page = await $('#b2indexPage');
    await expect(page).toBePresent();
})


})