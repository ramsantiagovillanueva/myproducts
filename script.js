
let products =[
	{
		pname:"Item1",
		price:"240",
		pcode:"p1",
		description:"lithiom battery",
		manufacturer:"China",
		stocks:"11",
		supplier:"Hongkong",
		expdate:"11/23/2021",
		url:"https://www.lazada.com.ph/catalog/?q=battery&_keyori=ss&from=input&spm=a2o4l.home.search.go.7928374b8FZjTX:",
		imgurl:"img/1.jpg",
	},

	{
	pname:"Item2",
	price:"240",
	pcode:"p2",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/catalog/?q=battery&_keyori=ss&from=input&spm=a2o4l.home.search.go.7928374b8FZjTX:",
	imgurl:"img/2.jpg",
},
{
	pname:"Item3",
	price:"240",
	pcode:"p3",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/battery-for-sjcam-sj4000-sj5000-action-sports-camera-black-i114122679-s117691635.html?spm=a2o4l.searchlist.list.39.1e0810d8iRZQfR&search=1:",
	imgurl:"img/3.jpg",
},
{
	pname:"Item4",
	price:"240",
	pcode:"p4",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/37v-li-ion-battery-rechargeable-1050mah-3885wh-for-4k-action-camera-go-pro-gopro-i235407357-s318490083.html?spm=a2o4l.searchlist.list.35.1e0810d82M664w&search=1:",
	imgurl:"img/4.jpg",
},
{
	pname:"Item5",
	price:"240",
	pcode:"p5",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/authentic-enook-18650-3600mah-35a-2pcs-i253635322-s348092809.html?spm=a2o4l.searchlist.list.37.1e0810d8gokXi2&search=1:",
	imgurl:"img/5.jpg",
},
{
	pname:"Item6",
	price:"240",
	pcode:"p6",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/panasonic-cr123a-3v-lithium-battery-cr-123a-cylindrical-photo-lithium-power-3-volts-cr123-dl123a-k123la-cr17345-white-i256401395-s352651019.html?spm=a2o4l.searchlist.list.53.1e0810d820ydh8&search=1:",
	imgurl:"img/6.jpg",
},
{
	pname:"Item7",
	price:"240",
	pcode:"p7",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/awt-26650-5200mah-45a-i278630865-s419161597.html?spm=a2o4l.searchlist.list.63.1e0810d8x4glGG&search=1:",
	imgurl:"img/7.jpg",
},
{
	pname:"Item8",
	price:"240",
	pcode:"p8",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/legit-golisi-26650-4300mah-battery-champagne-gold-i142175084-s162079756.html?spm=a2o4l.searchlist.list.23.1e0810d888KdOt&search=1:",
	imgurl:"img/8.jpg",
},
{
	pname:"Item9",
	price:"240",
	pcode:"p9",
	description:"lithiom battery",
	manufacturer:"Taiwan",
	stocks:"111",
	supplier:"Hongkong",
	expdate:"11/23/2024",
	url:"https://www.lazada.com.ph/products/wasabi-power-canon-lp-e17-battery-2-pack-and-dual-charger-lpe17-lee-photo-canon-eos-77d-eos-750d-eos-760d-eos-8000d-eos-m3-eos-m5-eos-m6-eos-rebel-t6i-eos-rebel-t6s-eos-rebel-t7i-kiss-x8i-i217953180-s284385186.html?spm=a2o4l.searchlist.list.39.1e0810d8SK31do&search=1:",
	imgurl:"img/9.jpg",
},
];


let output = "";
products.forEach(function(products){
output += `<div class="card" style="width: 18rem;"><a href="${products.url}"<a href="#" class="btn btn-primary">Click to buy</a>
  <img src="${products.imgurl}" class="card-img-top" alt="${products.imgurl}">
  <div class="card-body">
    <h5 class="card-title">Description</h5>
    <p class="card-text">Items are refundable within 2 days.</p>
	
  </div>
</div>`

})

document.getElementById('container').innerHTML = output;