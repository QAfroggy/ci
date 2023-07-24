import axios from "axios";

describe('axios', ()=>{
  
it("Get fligths", async()=>{
    try{
const response = await axios.get("https://www.booking.com/attractions/api/header?label=gog235jc-1FCAEoggI46AdIIVgDaLYBiAEBmAEhuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKDguGlBsACAdICJGU1Y2EwZjJiLTY2ZjctNGI2OC05YjE4LWM3MzAwYWE3MTJhZdgCBeACAQ&lang=en-us&aid=397594&product=flights",)
console.log("--->>>", + response)
//await expect(response.statusText).to.eq("OK")
    } catch(error){
        expect(error.response.status).to.eq(NaN)
    }

});
    });
