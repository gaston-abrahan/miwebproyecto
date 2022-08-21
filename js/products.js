let load = []
    fetch("https://japceibal.github.io/emercado-api/cats_products/101.json")
        .then(response => response.json())
        .then((data) => {
            cargar(data.products);
        });
    //console.log(load)

function cargar(load){
console.log(load[0])

let tbody = ''
for (let i = 0; i < load.length; i++) {
    const showCar = load[i];


    tbody +=
 `
        <div class="row">
                    <div class="col-3">
                        <img src="${showCar.image}" alt="${showCar.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${showCar.name}</h4>
                            <small class="text-muted">${showCar.soldCount} artículos</small>
                        </div>
                        <p class="mb-1">${showCar.description}</p>
                    </div>
                </div>
            `

    document.getElementById("data").innerHTML = tbody;
}}
cargar();