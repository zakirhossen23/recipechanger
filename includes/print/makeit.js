//Removed above
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

window.print();
setTimeout(window.close, 0);
