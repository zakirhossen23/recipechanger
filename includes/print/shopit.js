window.document.write('<style>body{background-color:white;}html{background-color:white;}</style>')
window.document.write('<style>.numbers {background: black;color: white;border-radius: 50%;width: 26px;align-items: center;margin: 0.5rem;text-align: center;font-size: 19px;font-family: calibri;vertical-align: middle;height: 26px;display: inline-block;}button#miseitprintbtn {font-size: 1rem !IMPORTANT;}								button#makeitprintbtn {font-size: 1rem !important;}</style>')


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
var allNumbers = document.getElementsByClassName("numbers")
while (allNumbers.length !== 0) {
     let numberid = allNumbers[0].innerText;
    allNumbers[0].outerHTML = '<img src="https://shopitmiseitmakeit.ca/wp-content/uploads/transparent-'+numberid+'.png"/>'
    console.log(numberid);
}
window.onafterprint = window.close;
window.print();