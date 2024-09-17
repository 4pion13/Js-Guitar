class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts(){
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {
            console.log(JSON.parse(productsLocalStorage));
            return JSON.parse(productsLocalStorage);
            //return productsLocalStorage;
        }
        return [];
    }

    putProducts(id){
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            //products.splice(index, 1);
            
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));
        return {
            pushProduct: pushProduct,
            products: products
        }

    }
}


const localStorageUtil = new LocalStorageUtil();
const a = localStorageUtil.putProducts(3)
