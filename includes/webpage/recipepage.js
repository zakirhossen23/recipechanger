//Getting elements by text
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}

//Shop it button

//Adding Shop IT
var Sourceelm = document.createElement("div");
Sourceelm.className = "has-text-align-center has-large-font-size";
Sourceelm.id = "ShopIt"
Sourceelm.innerHTML = '<div class=""><div><img loading="lazy" width="104" height="104" id="shopitimage" class="wp-image-3671" style="width: 52px;height: 56px;" src="undefined" alt="Mise It!" srcset="https://shopitmiseitmakeit.ca/wp-content/uploads/2021/12/Mini-Cart.jpg" sizes="(max-width: 104px) 100vw, 104px"> <span>Shop It!</span></div><button id="shopitprintbtn" onclick="shopitprint()" style="float: right;margin-top: -8%;height: 45px;font-size: 26px;width: 90px;" class="">Print</button></div>';

try {
    document.getElementsByClassName("rcps-instructions")[0].insertAdjacentElement('afterbegin', Sourceelm);

} catch (e) {

}

async function shopitprint() {
    var head = document.getElementsByTagName("head")[0]
    try {
        head.querySelector("#print-style-css").remove();
    } catch (e) { }
    var shopitbtn = document.getElementById("shopitprintbtn");
    shopitbtn.style.display = "None";
    var newwindow = window.open("index.asp", "popupwindow", "toolbar=0,resizable");
    newwindow.document.write(document.getElementsByTagName("head")[0].outerHTML);
    newwindow.document.write(document.getElementsByClassName("rcps-instructions")[0].outerHTML);
    await sleep(200);
    newwindow.document.write('<script type="text/javascript" src="https://shopitmiseitmakeit.ca/wp-content/plugins/recipechanger/includes/print/shopit.js?." id="shopit"></script>')
    shopitbtn.style.display = "";
}


//Mise it button

//Adding Mise IT Button and Icon
// var element = document.getElementById("MiseIt");
// element.outerHTML = '<div class="has-text-align-center has-large-font-size" id="MiseIt"><div style="height: 55px;margin-bottom: 36px;"><img loading="lazy" width="104" height="104" id="miseitimage" class="wp-image-3671" style="width: 52px;height: 56px;" src="undefined" alt="Mise It!" srcset="https://shopitmiseitmakeit.ca/wp-content/uploads/2021/12/Mini-Bowl-2.jpg " sizes="(max-width: 104px) 100vw, 104px"> <span>Mise It!</span></div><button id="miseitprintbtn" onclick="miseitprint()" style="float: right;margin-top: -14%;height: 45px;font-size: 26px;width: 90px;" class="">Print</button></div>'

async function miseitprint() {
    var head = document.getElementsByTagName("head")[0]
    try {
        head.querySelector("#print-style-css").remove();
    } catch (e) { }
    var miseitbtn = document.getElementById("miseitprintbtn");
    miseitbtn.style.display = "None";
    var newwindow = window.open("index.asp", "popupwindow", "toolbar=0,resizable");
    newwindow.document.write(document.getElementsByTagName("head")[0].outerHTML);
    newwindow.document.write(document.getElementsByClassName("rcps-instructions")[0].outerHTML);
    await sleep(200);
    newwindow.document.write('<script type="text/javascript" src="https://shopitmiseitmakeit.ca/wp-content/plugins/recipechanger/includes/print/miseit.js?." id="miseit"></script>')
    miseitbtn.style.display = "";
}


//Make it button

//Adding Make IT Button and Icon
var element = document.getElementById("MiseIt");
// var Makeit = element.nextElementSibling.nextElementSibling;
// Makeit.outerHTML = '<div class="has-text-align-center has-large-font-size" id="MakeIt"><div style="height: 55px;margin-bottom: 36px;"><img loading="lazy" width="104" height="104" id="makeitimage" class="wp-image-3671" style="width: 52px;height: 56px;" src="undefined" alt="Make It!" srcset="https://shopitmiseitmakeit.ca/wp-content/uploads/2021/12/Shop-It-Mise-It-Make-It-Logo-Design-06.jpg" sizes="(max-width: 104px) 100vw, 104px"> <span style="color:#85a18b">Make It!</span></div><button id="makeitprintbtn" onclick="makeitprint()" style="float: right;margin-top: -13%;height: 45px;font-size: 26px;width: 90px;" class="">Print</button></div>'


async function makeitprint() {
    var head = document.getElementsByTagName("head")[0]
    try {
        head.querySelector("#print-style-css").remove();
    } catch (e) { }
    var makeitbtn = document.getElementById("makeitprintbtn");
    makeitbtn.style.display = "None";
    var newwindow = window.open("index.asp", "popupwindow", "toolbar=0,resizable");
    newwindow.document.write(document.getElementsByTagName("head")[0].outerHTML);
    newwindow.document.write(document.getElementsByClassName("rcps-instructions")[0].outerHTML);
    await sleep(200);
    newwindow.document.write('<script type="text/javascript" src="https://shopitmiseitmakeit.ca/wp-content/plugins/recipechanger/includes/print/makeit.js?." id="miseit"></script>')
    makeitbtn.style.display = "";
}
