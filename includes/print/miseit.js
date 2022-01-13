//Removed above
var shopit = document.getElementById("ShopIt");

while (true) {
    var element = shopit.nextElementSibling;
    if (element.getAttribute("id") != "MiseIt") {
        element.remove();
    } else { shopit.remove(); break; }

}

//Rmoved Bottom
var element = document.getElementById("MakeIt")
while (true) {
    try {
        if (element.nextElementSibling != null) {
            element.nextElementSibling.remove()
        } else { element.remove(); break; }
    } catch (e) {
        element.remove(); break;
    }

}

window.print();
setTimeout(window.close, 0);