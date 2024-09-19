class Header {
    
    render(count){
        const html = `
            <div class="header-container">
                <h1 class="header-title italic"><em>Guitar Shop</em></h1>
                <div class="header-counter">
                    <button class="header-counter__btn" onclick = "shopping.openShoppingCard()">
                        <i class="fa-solid fa-cart-shopping fa-xl"></i>
                        <span>${count}</span>
                    </button>

                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html
    }
}
const productsCounter = localStorageUtil.getProducts();
console.log(productsCounter.lenght)
const headerPage = new Header();
headerPage.render(productsCounter.length);