let btnsSelect = document.querySelectorAll('.btn-selected');
let allOptions = document.querySelectorAll('.option'); 
Array.from(btnsSelect).forEach(function(btn){
	btn.addEventListener('click', function(event){
  		event.target.classList.toggle('arrow-up'); 
  		event.target.nextElementSibling.classList.toggle('hide'); 
	})
});

Array.from(allOptions).forEach(function(btn){ 
  btn.addEventListener('click', function(event){
  	let btnSelect = event.target.parentNode.previousElementSibling; 
    btnSelect.classList.remove('arrow-up'); 
    event.target.parentNode.classList.add('hide');
    btnSelect.innerHTML = event.target.innerHTML; 
  })
});


 function showModalWin() {
    var darkLayer = document.createElement('div'); 
    darkLayer.id = 'shadow'; 
    document.body.appendChild(darkLayer); 

    var modalWin = document.getElementById('popupWin'); 
    modalWin.style.display = 'block'; 

    darkLayer.onclick = function () {  
        darkLayer.parentNode.removeChild(darkLayer); 
        modalWin.style.display = 'none'; 
        return false;
    };
}

let input = document.querySelector('input.info');
input.addEventListener('keyup', function(event) {
  console.log(event.target.value);
});

const data = [
  {
  	type: "house",
   	title: "Vision agency",
   	description: "2 bedroom house for rent in Dubai",
   	rating: 5,
   	ratingCount: 365,
     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQ7uYO19q7PKLBT8-ekiB9CZUTObLX9Qs-0tiyCsYZjzs4tdfhw'
  },
  {
    type: "festivals",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 4,
    ratingCount: 1165,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiADg4Ol_XRQO00u_wihIrTpCh2M-jIm9AFL9l4_zNm6-0dm3Vcg'
  },
  {
    type: "transport",
    title: "Bus trans",
    description: "Aliquam quis pulvinar purus",
    rating: 3,
    ratingCount: 365,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcWsLV6ZNxHyAgD1nKlc4Fwp7ekI25YT9ZsyfMCfARrN4277y'
  },
  {
  	type: "builds",
  	title: "Reality agency",
  	description: "4 bedroom house for rent in Dubai",
 	  rating: 2,
  	ratingCount: 165,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGo7luBjejF4tVmJtCivRSCFU68D9Z7GTkMHlJTaEtjDXAQUSlw'
  },
  {
    type: "gallery",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 14,
    ratingCount: 851,
    url: 'https://artinterior.ua/wp-content/uploads/2015/01/dom_web01.jpg'
  },
  {
    type: "gallery",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 14,
    ratingCount: 851,
    url: 'https://artinterior.ua/wp-content/uploads/2015/01/dom_web01.jpg'
  },
  {
  	type: "house",
   	title: "Vision agency",
   	description: "2 bedroom house for rent in Dubai",
   	rating: 5,
   	ratingCount: 365,
     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQ7uYO19q7PKLBT8-ekiB9CZUTObLX9Qs-0tiyCsYZjzs4tdfhw'
  },
  {
    type: "festivals",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 4,
    ratingCount: 1165,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiADg4Ol_XRQO00u_wihIrTpCh2M-jIm9AFL9l4_zNm6-0dm3Vcg'
  },
  {
    type: "transport",
    title: "Bus trans",
    description: "Aliquam quis pulvinar purus",
    rating: 3,
    ratingCount: 365,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkcWsLV6ZNxHyAgD1nKlc4Fwp7ekI25YT9ZsyfMCfARrN4277y'
  },
  {
  	type: "builds",
  	title: "Reality agency",
  	description: "4 bedroom house for rent in Dubai",
 	  rating: 2,
  	ratingCount: 165,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGo7luBjejF4tVmJtCivRSCFU68D9Z7GTkMHlJTaEtjDXAQUSlw'
  },
  {
    type: "gallery",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 14,
    ratingCount: 851,
    url: 'https://artinterior.ua/wp-content/uploads/2015/01/dom_web01.jpg'
  },
  {
  	type: "house",
   	title: "Vision agency",
   	description: "2 bedroom house for rent in Dubai",
   	rating: 5,
   	ratingCount: 365,
     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQ7uYO19q7PKLBT8-ekiB9CZUTObLX9Qs-0tiyCsYZjzs4tdfhw'
  },
  {
    type: "festivals",
    title: "Long beach",
    description: "Beach party festival 2014",
    rating: 4,
    ratingCount: 1165,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiADg4Ol_XRQO00u_wihIrTpCh2M-jIm9AFL9l4_zNm6-0dm3Vcg'
  }
];

(function(){
  let container = document.querySelector('.boxes-wrap');
  let blocks = '';
  let titleClasses = {
    house:'',
    festivals: '',
    transport: '',
    builds: '',
    gallery: ''
};

 

data.forEach(function(item){
  console.log(item.type);
  console.log(titleClasses[item.type]);
  blocks = blocks + 
        ` <div class="block ${item.type}">
						<div class="block-picture" style="background: url(${item.url}) no-repeat center; background-size: cover">
							<div class="circle-block">
								<div class="picture-section"></div>
							</div>
						</div>
						<div class="card-block">
							<div class="description-block">${item.description}</div>
							<div>
								<div class="item-block${titleClasses[item.type]}">${item.title}</div>					  
								<div class="star-rating">
								    <div class="star-rating-wrap">
									    <input class="star-rating-input" id="star-rating-5" type="radio" name="rating" value="5">
								        <label class="star-rating-ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
								        <input class="star-rating-input" id="star-rating-4" type="radio" name="rating" value="4">
								        <label class="star-rating-ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars"></label>
								        <input class="star-rating-input" id="star-rating-3" type="radio" name="rating" value="3">
								        <label class="star-rating-ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars"></label>
								        <input class="star-rating-input" id="star-rating-2" type="radio" name="rating" value="2">
								        <label class="star-rating-ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars"></label>
								        <input class="star-rating-input" id="star-rating-1" type="radio" name="rating" value="1">
								        <label class="star-rating-ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
								    </div>
								    <div class="reviews-block">${item.ratingCount}</div>
								</div>
							</div>
						</div>
					</div>`
 });
  container.innerHTML = blocks;
})()

