class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    addLoacaleStorage(element, elementId) {
        const result = localStorageUtil.putProducts(elementId);
        //console.log(result.pushProduct);
        if (result.pushProduct === true){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;     
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(result.products.length);
        
    }

    render() {
        const productsItem = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach((el) => {
            let activeClass = '';
            let activeText = '';
            if(productsItem.indexOf(el.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${el.name}</span>
                    <img class="products-element__img" src="${el.img}">
                    <span class="products-element__price">${el.price.toLocaleString()} ₽</span>
                    <button class="products-element__btn${activeClass}" onclick = "productsPage.addLoacaleStorage(this, '${el.id}')">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        
        `;

        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products();
productsPage.render();