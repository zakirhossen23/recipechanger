//Remove minutes Edit Recipe Page
function contains(selector, text) {
    var elements = document.querySelectorAll(selector);
    return Array.prototype.filter.call(elements, function (element) {
        return RegExp(text).test(element.textContent);
    });
}
window.addEventListener('load', function () {
    var elements = contains('span', 'minutes');
    elements.forEach((e) => { e.innerHTML = ""; });
})
