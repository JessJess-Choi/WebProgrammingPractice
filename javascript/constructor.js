function Product(name, price){
	this.name = name;
	this.price = price;
}

let product = new Product("banana",1200);
console.log(product);
console.log(Product("banana",1200));
