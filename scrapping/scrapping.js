const puppeteer = require('puppeteer');

//función autoejecutable
(async () => {
    //nuestro codigo
    console.log('lanzamos navegador:');

    //const browser = await puppeteer.launch(); //lanzate incognito
    const browser = await puppeteer.launch({headless:false}); //no te lances inógnito
    const page= await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/messi');

    var titulo1=await page.evaluate(()=>{
        const h1 = document.querySelector('h1')
        console.log(h1.innerHTML)
        return h1.innerHTML
    });

    console.log(titulo1)
    
    console.log('cerramos navegador:');
   // browser.close(); //cierrate
    console.log('navegador cerrado');
})();