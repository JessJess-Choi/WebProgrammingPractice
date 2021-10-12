let object = {
	name : '바나나',
	price : '1200',
	print : function(){
		console.log(`${this.name}의 가격은 ${this.price}입니다`);
	},
	print2: (name, price) => {console.log(name, price)},
	print3: (t) => {
		console.log(`${t.name}의 가격은 ${t.price}입니다`);
	}
};
object.print();
object.print2(object.name, object.price);
object.print3(object);
