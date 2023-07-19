import axios from "axios";

describe('axios', ()=>{
    before(()=>{
it("Get fligths", ()=>{
const response = axios.get("https://www.booking.com/attractions/api/header?label=gog235jc-1FCAEoggI46AdIIVgDaLYBiAEBmAEhuAEXyAEM2AEB6AEB-AECiAIBqAIDuAKDguGlBsACAdICJGU1Y2EwZjJiLTY2ZjctNGI2OC05YjE4LWM3MzAwYWE3MTJhZdgCBeACAQ&lang=en-us&aid=397594&product=flights",)
expect(response.status).to.eq(200)

});
    });
});