/*================DATA====================*/
var dishesArr = [
	{
		dish: 'Steak',
		price: 15.99
	},
	{
		dish: 'Pizza',
		price: 7.99
	},
	{
		dish: 'Salad',
		price: 3.99
	},
	{
		dish: 'Burrito',
		price: 6.99
	}
];

/*================MODEL====================*/
var Diner = function(dish) {
	this.dish = dish;
	this.dishCount = 0;
}

Diner.prototype.addDish = function() {
	this.dishCount++;
}

Diner.prototype.calculateCost = function(tax) {
	this.dishesArr.dish = dishesArr.dish;
	this.dishesArr.price = dishesArr.price;
	this.tax = 0.05;
	this.tip = 0.1;
}

Diner.prototype.splitBill = function() {
	
}

/*================CONTROLLER====================*/