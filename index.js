function render(){

    headerPage.render(productsCounter.length);
    productsPage.render();


}

spinner.render();
// https://www.myjsons.com/v/73513471
// server/catalog.json
let CATALOG = [];
render();
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(function(){
            spinner.rootClear();
            render();
        }, 1000);
    })
    .catch(error => {
        console.log(error);
    })