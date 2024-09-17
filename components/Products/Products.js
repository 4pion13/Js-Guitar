class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach((el) => {
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${el.name}</span>
                    <img class="products-element__img" src="${el.img}">
                    <span class="products-element__price">${el.price.toLocaleString()} ₽</span>
                    <button class="products-element__btn">Добавить в корзину</button>
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