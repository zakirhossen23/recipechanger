//Getting elements by text
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// //Shop it button

var Sourceelm = document.getElementById("ShopIt");
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

//Converting all numbers into image
var allNumbers = document.getElementsByClassName("numbers")
while (allNumbers.length !== 0) {
    let numberid = allNumbers[0].innerText;
    allNumbers[0].outerHTML = '<img src="https://shopitmiseitmakeit.ca/wp-content/uploads/transparent-' + numberid + '.png"/>'
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



/**
* Update Shopit Box
*/
var ingredient_tables = document.querySelectorAll('table.rcps-table-ingredients ');
var all_tables_asiles = [];
function updateShopitInforamtions() {
    all_tables_asiles = [];
    for (let i = 0; i < ingredient_tables.length; i++) {
        var tables_asile = ingredient_tables[i].children[0].children

        var one_table_data = [];
        for (let i = 0; i < tables_asile.length; i++) {
            one_table_data.push([tables_asile[i].children[1].innerText, tables_asile[i].children[2].innerText, tables_asile[i].children[3].firstChild.checked])

        }
        all_tables_asiles.push(one_table_data)
    }
}

/**
* Update Have It
*/
function updateHaveIt() {
    updateShopitInforamtions();
    let total_buy_need = 0.00;
    for (let i = 0; i < all_tables_asiles.length; i++) {
        const element = all_tables_asiles[i];
        for (let ai = 0; ai < element.length; ai++) {
            const asile = element[ai];
            if (asile[2] === false) {
                total_buy_need += Number(asile[1]);
            }
        }
    }
    document.querySelector("#shopit-buy-need").innerHTML = `\$${total_buy_need.toFixed(2)}`;
    return total_buy_need.toFixed(2);
}



/**
* Update Total Cost
*/
function updateTotalCost() {
    updateShopitInforamtions();
    let total_cost_ingredients = 0.00;
    for (let i = 0; i < all_tables_asiles.length; i++) {
        const element = all_tables_asiles[i];
        for (let ai = 0; ai < element.length; ai++) {
            const asile = element[ai];
            total_cost_ingredients += Number(asile[1]);
            
        }
    }
    document.querySelector("#shopit-all-ingredients").innerHTML = `\$${total_cost_ingredients.toFixed(2)}`;
    return total_cost_ingredients.toFixed(2);
}


/**
* Update Cost Per Serving
*/
function updateCostPerServing() {
    updateShopitInforamtions();
    let total_cost_per_serving = 0.00;
    total_cost_per_serving = updateHaveIt() /Number(document.querySelector("#total_servings").value);
  
    document.querySelector("#shopit-per-serving").innerHTML = `\$${total_cost_per_serving.toFixed(2)}`;
    return total_cost_per_serving.toFixed(2);
}




/**
* Update Overbuy and Pantry Investment
*/
function updateOverbuyInvestment() {
    updateShopitInforamtions();
    let total_overbuy = 0;
    let total_overbuy_in_percent = 0;
    let total_ingredients = 0;

    for (let i = 0; i < all_tables_asiles.length; i++) {
        const element = all_tables_asiles[i];
        for (let ai = 0; ai < element.length; ai++) {
            const asile = element[ai];
            total_ingredients+=1;
            if (asile[0] === "*"&& asile[2]=== false) {
                total_overbuy += 1;
            }
        }
    }

    total_overbuy_in_percent = (total_overbuy/ total_ingredients) * 100;
    
    document.querySelector("#shopit-overbuy-investment").innerHTML = `${total_overbuy_in_percent.toFixed(2)}%`;
    return total_overbuy_in_percent;
}


updateHaveIt();
updateTotalCost();
updateCostPerServing();
updateOverbuyInvestment();