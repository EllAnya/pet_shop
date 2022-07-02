let animalList = [
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/1.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/1.png",
		title : "An Animal Album",
		price : 85.80,
		discount : 80.50,
		rating: 0,
      	isNew: false
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/3.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/3.png",
		title : "Wait, You Need This",
		price : 90.00,
		discount : 0,
		rating: 0,
      	isNew: true
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/4.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/4.png",
		title : "Pet Food Corner",
		price : 105.00,
		discount : 0,
		rating: 4,
      	isNew: false
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/5.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/5.png",
		title : "Pet Leaving House",
		price : 50.00,
		discount : 47.50,
		rating: 4,
      	isNew: false
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/6.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/6.png",
		title : "Pet Leaving House",
		price : 62.85,
		discount : 58.50,
		rating: 4,
      	isNew: false
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/7.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/7.png",
		title : "Dark Fish",
		price : 78.50,
		discount : 0,
		rating: 4,
      	isNew: true
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/8.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/8.png",
		title : "Basic Dog Trainning",
		price : 55.00,
		discount : 0,
		rating: 3,
      	isNew: false
	},
	{
		mediumImage : "https://htmldemo.net/amber/amber/assets/images/products/medium-product/2.png",
      largeImage: "https://htmldemo.net/amber/amber/assets/images/products/large-product/2.png",
		title : "Animal For Life",
		price : 82.85,
		discount : 75.50,
		rating: 4,
      	isNew: false
	}
	
];

function createCards() {
    document.getElementById("animalList").innerHTML = '';

    animalList.forEach((element, index) => {

        let priceHtml = `<span class="price ${element.discount ? 'has-discount' : ''}">$${element.price}</span>`;

        if (element.discount) {
            priceHtml += `<span class="discount-price m-2">$${element.discount}</span>`;
        };

        let newAnimal = (element.isNew) ? `<span class="badge bg-warning text-light new">${'New'}</span>` : ``;

        let ratingHTML = `<p class="rating-info text-warning"></p> `;
        if (element.rating == 0) {
            ratingHTML = `<p>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            </p>`
        } else if (element.rating == 1) {
            ratingHTML = `<p>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            </p>`
        } else if (element.rating == 2) {
            ratingHTML = `<p>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            </p>`
        } else if (element.rating == 3) {
            ratingHTML = `<p>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            </p>`
        } else if (element.rating == 4) {
            ratingHTML = `<p>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star text-warning"></i>
            </p>`
        } else {
            ratingHTML = `<p>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            <i class="bi bi-star-fill text-warning"></i>
            </p>`
        };

        document.getElementById("animalList").innerHTML += `
        <div class="col-lg-3 col-sm-6 mb-4">
                <div class="card text-center" onclick="openModal(${index})" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="new-info">
                ${newAnimal}
                </div>
                    <img src="${element.mediumImage}" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="rating-info">${ratingHTML}</p> 
                      <p class="price-info">${priceHtml}</p>
                    </div>
                </div>
            </div>`;
    })
};

function openModal(index) {

    let selectedPet = animalList[index];

        let priceHtml = `<span class="price ${selectedPet.discount ? 'has-discount' : ''}">$${selectedPet.price}</span>`;

        if (selectedPet.discount) {
            priceHtml += `<span class="discount-price m-2">$${selectedPet.discount}</span>`;
        };


        document.getElementById('open-modal').innerHTML =
        `<button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="card mb-3 border-light">
            <div class="row g-0">
                <div class="col-md-8">
                    <img src="${selectedPet.largeImage}" class="img-fluid">
                </div>
                <div class="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">${selectedPet.title}</h5>
                        <p class="price-info">${priceHtml}</p>
                        <button type="button" class="btn btn-warning text-light">${'ADD TO CART'}</button>
                        <span><i class="bi bi-heart-fill heart ms-3"></i></span>
                    </div>
                </div>
            </div>
        </div>`
};
function addNewPet() {
    let newPet = {
         mediumImage : document.getElementById("form-image").value,
         largeImage: document.getElementById("form-image").value,
         title : document.getElementById("form-title").value,
         price : document.getElementById("form-price").value,
         discount : document.getElementById("form-discount").value != '' ? document.getElementById("form-discount").value : 0,
         rating: Number(document.getElementById("form-rate").value),
         isNew: document.getElementById("form-new").checked,
    };
 
    animalList.unshift(newPet);
 
    createCards();
 
    document.getElementById("form-image").value = "";
    document.getElementById("form-image").value = "";
    document.getElementById("form-title").value = "";
    document.getElementById("form-price").value = "";
    document.getElementById("form-discount").value = "";
    document.getElementById("form-rate").value = "";
    document.getElementById("form-new").checked = "";
 }
