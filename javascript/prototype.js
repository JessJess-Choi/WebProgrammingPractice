function Product(name,price){
	this.name = name;
	this.price = price;
}
Product.prototype.print = function(){
	console.log(this.name,this.price,this.priceLimit);
};

Product.prototype.priceLimit = 2000;

let products=[
	new Product('banana',1200),
	new Product('apple',1200),
	new Product('pear',1200),
	new Product('sweet',1200)
];
for(let product of products){
	product.print();
}
console.log('----------------------------');
for(let product in products){
	products[product].print();
}
