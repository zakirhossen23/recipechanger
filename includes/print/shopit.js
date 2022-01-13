
try {
    document.getElementById("print-style-css").remove()
} catch (e) {

}

var element = document.getElementById("MiseIt")
while (true) {
    if (element.nextElementSibling != null) {
        element.nextElementSibling.remove()
    } else { element.remove(); break; }
}

window.print();
setTimeout(window.close, 0);