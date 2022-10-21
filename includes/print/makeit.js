//Removed above

window.document.write('<style>body{background-color:white;}html{background-color:white;}</style>')
window.document.write('<style>.numbers {background: black;color: white;border-radius: 50%;width: 26px;align-items: center;margin: 0.5rem;text-align: center;font-size: 19px;font-family: calibri;vertical-align: middle;height: 26px;display: inline-block;}button#miseitprintbtn {font-size: 1rem !IMPORTANT;}								button#makeitprintbtn {font-size: 1rem !important;}</style>')

var shopit = document.getElementById("ShopIt");

while (true) {
    var element = shopit.nextElementSibling;
    if (element.getAttribute("id") != "MakeIt") {
        element.remove();
    } else { shopit.remove(); break; }

}

// Remove Bottom

var elements = document.getElementsByClassName("wp-block-table is-style-stripes")
var lastmakeit = elements[elements.length - 1];
while (true) {
    if (lastmakeit.nextElementSibling != null) {
        lastmakeit.nextElementSibling.remove()
    } else { break; }
}
window.onafterprint = window.close;
window.print();