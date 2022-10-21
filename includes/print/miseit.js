//Removed above
window.document.write('<style>body{background-color:white;}html{background-color:white;}</style>')
window.document.write('<style>.numbers {background: black;color: white;border-radius: 50%;width: 26px;align-items: center;margin: 0.5rem;text-align: center;font-size: 19px;font-family: calibri;vertical-align: middle;height: 26px;display: inline-block;}button#miseitprintbtn {font-size: 1rem !IMPORTANT;}								button#makeitprintbtn {font-size: 1rem !important;}</style>')

var shopit = document.getElementById("ShopIt");

try {
    var element = shopit.nextElementSibling;
    if (element.getAttribute("id") != "MiseIt") {
        element.remove();
    } else { shopit.remove();  }
} catch (error) {
    
}

//Rmoved Bottom
var element = document.getElementById("MakeIt")
try {
    try {
        if (element.nextElementSibling != null) {
            element.nextElementSibling.remove()
        } else { element.remove(); }
    } catch (e) {
        element.remove();
    }
} catch (error) {
    
}
window.onafterprint = window.close;
window.print();