// Shelly releiden hallinta pörssisähkönhinnan mukaan
// ------------------------
// Tekijät: Saow & Arskakoo
// ------------------------
// Tämä skripti hallitsee shellyn releitä pörssisähkön hinnan mukaan
// Säädöt ovat helposti hallittavissa koodin joukosta kommentteja seuraten

// ohjeet readme.md:ssä

// Versio 1.0


let url = "https://api.spot-hinta.fi/JustNow?lookForwardHours=0";

console.log("Etsitään dataa...");

Shelly.call("HTTP.GET", { url: url, timeout: 15, ssl_ca: "*" }, function (res, err) {
    // Tarkistaa errorit
    if (err !== 0 || res === null || (res.code !== 200 && res.code !== 400)) {
        console.log("Error: Request failed or unexpected response code.");
    } else {
        try {
            let bodyData = JSON.parse(res.body);
            let price = bodyData.PriceWithTax;
            console.log("Tämän hetken hinta:", price);

            // If lauseet releiden hallintaan
            
            // Jos hinta on yli 40snt molemmat kytkimet menevät pois päältä
            if (price > 0.4) {
                Shelly.call("Switch.Set", "{ id:" + 0 + ", on:false}");
                Shelly.call("Switch.Set", "{ id:" + 1 + ", on:false}");
                console.log("Molemmat kytkimet ovat pois päältä");
            // Jos hinta on 10snt molemmat kytkimet ovat päällä
            } else if (price < 0.1 ){
                Shelly.call("Switch.Set", "{ id:" + 0 + ", on:true}");
                Shelly.call("Switch.Set", "{ id:" + 1 + ", on:true}");
                console.log("Molemmat kytkimet ovat päällä");
            // Jos hinta on 30snt kytkin 1 menee pois päältä
            } else if (price < 0.3){
                Shelly.call("Switch.Set", "{ id:" + 0 + ", on:true}");
                Shelly.call("Switch.Set", "{ id:" + 1 + ", on:false}");
                console.log("Kytkin 1 on pois päältä");
            // Jos hinta on 20snt kytkin 0 menee pois päältä
            } else {
                Shelly.call("Switch.Set", "{ id:" + 1 + ", on:true}");
                Shelly.call("Switch.Set", "{ id:" + 0 + ", on:false}");
                console.log("Kytkin 0 on pois päältä");
            }
        } catch (error) {
            console.log("Error: JSON parsing error:", error);
        }
    }
});