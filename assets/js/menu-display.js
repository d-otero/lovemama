
var xhr = new XMLHttpRequest();



    xhr.open('GET','lovemamamenu.json',true);
    xhr.onload = function () {
    console.log(xhr.readyState);
    console.log(xhr.status);
        if (this.status == 200 && this.readyState == 4) {
            var menu = JSON.parse(this.response);

            var output = ' ';
            
            for (var i in menu) {
                output +=
                `
                <div class="category" data-category="">
                    <div class="category-name">
                        <h1>${menu[i].category.category_name}</h1>
                        <img class="default-icon" data-dropdown=${menu[i].category.category_name} src="assets/img/ios-arrow-forward.svg" alt="">
                    </div>

                    <div class="all-items" data-allitems="">
                `
                for (var j in menu[i].category.items) {
                    output +=
                `
                        <div class="item">
                            <div class="name-price">
                                <h2 class="menu-item-name">${menu[i].category.items[j].item_name}</h2>
                                <h3 class="menu-item-price">${menu[i].category.items[j].item_price}</h3>
                            </div>
                            <div class="menu-item-description"">${menu[i].category.items[j].item_description}</div>
                        </div>
                `
                }

                output +=
                `
                </div>
                </div>    
                `
            }
            document.getElementById('menu-all').innerHTML = output;
        } 
    }
    xhr.send();   



