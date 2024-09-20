class Shopping {
    constructor(){
        this.classNameShoppingActive = ' shopping-container__active';
        this.countShoppingMenu = 0;
    }

    openShoppingCard(){
        let openShoppingCardClass = '';
        if (this.countShoppingMenu === 0){
            openShoppingCardClass = this.classNameShoppingActive;
            this.render(openShoppingCardClass);
            this.countShoppingMenu = 1;
            //const shoppingCard = getElementById('shopping-card');
            //console.log(shoppingCard);

        } else if(this.countShoppingMenu === 1) {
            this.countShoppingMenu = 0;
            this.render(openShoppingCardClass);
        }
    }

    deleteFromShoppingCard(elementId){
        const result = localStorageUtil.putProducts(elementId);
        this.render(this.classNameShoppingActive);
        productsPage.render();
        headerPage.render(result.products.length);
    }

    render(className){
        let htmlShoppingCard = ''
        const purchases = localStorageUtil.getProducts();
        console.log(purchases.length)
        if (purchases.length === 0){
            htmlShoppingCard += `
                <p>Корзина пуста</p>
            `
        }else {
            purchases.forEach(element => {   
                const purchasesName = (CATALOG.find(item => item.id === element));
                htmlShoppingCard += `
                    <div class="shopping-container__item" style="margin-bottom: 10px;">
                        <div>
                            <span class="products-element__name" style="margin-bottom: 0px; margin-top: 5px">${purchasesName.name}</span>
                            <span class="products-element__price" style="margin: 0 auto; margin-bottom: 5px">${purchasesName.price.toLocaleString()} ₽</span>
                        </div>
                        <button class="shopping-container__btn" onclick = "shopping.deleteFromShoppingCard('${purchasesName.id}')"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `
            });

        }

        const html = `
            <div id="shopping-card" class="shopping-container${className}">
                <div style = "display:flex; justify-content:end; padding: 5px;">
                    <button class = "close-btn" onclick = "shopping.openShoppingCard()"><i class="fa-solid fa-xmark fa-lg"></i></button>\
                </div>
                ${htmlShoppingCard}
            </div>
        `;
        ROOT_SHOPING.innerHTML = html;
    }

}


const shopping = new Shopping();
