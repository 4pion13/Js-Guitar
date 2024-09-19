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

    render(className){
        let htmlShoppingCard = ''
        const purchases = localStorageUtil.getProducts();
        purchases.forEach(element => {   
            const purchasesName = (CATALOG.find(item => item.id === element));
            htmlShoppingCard += `
                <li class="products-element">
                    <span class="products-element__name">${purchasesName.name}</span>
                    <img class="products-element__img" src="${purchasesName.img}">
                    <span class="products-element__price">${purchasesName.price.toLocaleString()} ₽</span>
                </li>
            `

        });

        const html = `
            <div id="shopping-card" class="shopping-container${className}">
                <button onclick = "shopping.openShoppingCard()"><i class="fa-solid fa-xmark"></i></button>\
                ${htmlShoppingCard}
            </div>
        `;
        ROOT_SHOPING.innerHTML = html;
    }

}


const shopping = new Shopping();
