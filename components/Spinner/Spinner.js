class Spinner{
    rootClear(){
        ROOT_SPINNER.innerHTML = '';
    }
    render(){
        let html = `
            <div class="d-flex justify-content-center" style = "position:fixed; width: 100%; height: 80%; align-items: center;">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;
                "role="status">
        
                </div>


            </div>
        

        `

        ROOT_SPINNER.innerHTML = html;
    }
}


const spinner = new Spinner();
