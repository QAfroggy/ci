import Home from  '../../utils/pages/home.js'
describe('Elements', () => { //Check that elements are present


  before( async () => {
    Home.openPage();
  
  })


it('Page is displayed', async()=>{
    
     const page = await $(Home.page);
     await expect(page).toBePresent();
  
})
it('Logo is displayed', async()=>{
 
 const logo = await $(Home.logo);
 await expect(logo).toBePresent();

})

it('Consent bunner', async()=>{
  const bunner = await $(Home.bunner);
  await expect(bunner).toBePresent();

})
it('Akceptuję btn is present', async()=>{
  const akcept = await $(Home.akceptBtn);
  await expect(akcept).toBePresent();

})
it('Zaawansowanie btn is present', async()=>{
  const zaawansowanieBtn = await $(Home.zaawansowanieBtn);
  await expect(zaawansowanieBtn).toBePresent();

})
it('Click on zaawansonanie btn ', async()=>{
  await $(Home.zaawansowanieBtn).click();
  const ustZaawans = await $('#onetrust-pc-sdk')
  await expect(ustZaawans).toExist();


})
// it('Ustawienia Zaawansowania widow is prsent', async()=>{
//   const ustawieniaZaawansowania = await $(Home.ustawieniaZaawansowania);
//   await expect(ustawieniaZaawansowania).toBePresent();
// });
// it('H2 has text Ustawienia zaawansowane', async()=>{
//   const text = await $(Home.h2UstawnieniaZaawansowania);
//   await expect(text).toHaveValue(Home.expected.h2UstawnieniaZaawansowaniaText);
// });


});