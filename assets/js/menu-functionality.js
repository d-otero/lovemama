var allItems, toggleAllButton, categories;

allItems = Array.from(document.querySelectorAll('[data-allitems]'));
categories = Array.from(document.querySelectorAll('.category-name'));
toggleAllButton = document.querySelector('#menu-nav-main li');
// Changes element display property to element given in condition
var init = function (elem) {
    elem = elem;
    allItems.forEach(element => {
        element.style.display = elem;
    });
}

//Show / Hide Function

function toggleDisplay(elem) {
    //If element is an array, check if every object is hidden
    //If false, make all display none;
    //Else, display flex
    if (Array.isArray(elem)) {
        if (allItems.every(hidden) === false) {
            toggleAllButton.innerHTML = 'SHOW MENU'
            init('none');
        }
        else {
            toggleAllButton.innerHTML = 'HIDE MENU'
            init('flex');
             }
    //If element is not an array
    //If element display = none, make display flex
    //Else, display none
    } else {
        if (elem.style.display === 'none') {
            toggleAllButton.innerHTML = 'HIDE MENU'
            elem.style.display = 'flex';
        } else {
            elem.style.display = 'none';
        }
    }
}

//Check to see if element is hidden
function hidden(elem) {
    return elem.style.display === 'none';
}

//Display flex default initialization
init('flex');



document.addEventListener('click', function (event) {

    if (event.target.matches("#menu-nav-main li")) {
        allItems = Array.from(document.querySelectorAll('[data-allitems]'));
        toggleDisplay(allItems);
    } else if (event.target.closest(".category-name")) {
        let e = event.target.closest(".category-name");
        let s = e.nextElementSibling;
        toggleDisplay(s);
    }
})