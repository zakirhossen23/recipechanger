
//Adding Recipe Source
var Sourceelm = document.createElement("h4");
Sourceelm.innerHTML = "Recipe Source: " + window.location.href;
document.getElementsByClassName("rcps-post-title")[0].insertAdjacentElement('beforeEnd', Sourceelm);


//Adding Shop IT

var Sourceelm = document.createElement("div");
Sourceelm.className = "has-text-align-center has-large-font-size";
Sourceelm.innerHTML = '<img loading="lazy" width="104" height="104" class="wp-image-3671" style="width: 52px;" src="undefined" alt="Mise It!" srcset="https://shopitmiseitmakeit.ca/wp-content/uploads/2021/12/Mini-Cart.jpg" sizes="(max-width: 104px) 100vw, 104px"> Shop It!';
document.getElementsByClassName("rcps-instructions")[0].insertAdjacentElement('afterbegin', Sourceelm);

