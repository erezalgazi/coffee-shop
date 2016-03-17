var coffeeShop = {
  beans: {
  	amount: 40,
  	price: 10
  },
  drinkRequirements: {
    latte: {
    	drinkPrice: 12,
    	beanRequirement: 10	
    }, 
    americano: {
    	drinkPrice: 8,
    	beanRequirement: 5
    },
    doubleShot: {
    	drinkPrice: 13,
    	beanRequirement: 15
    },
    frenchPress: {
    	drinkPrice: 15,
    	beanRequirement: 12
    }
  },
  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (!coffeeShop.drinkRequirements[drinkType]) {
    	alert("Sorry, we don't make " + drinkType + " !");
    	return false;
    }
    else if (coffeeShop.drinkRequirements[drinkType] && (coffeeShop.beans.amount - coffeeShop.drinkRequirements[drinkType].beanRequirement) >= 0) {
    	coffeeShop.beans.amount = coffeeShop.beans.amount - coffeeShop.drinkRequirements[drinkType].beanRequirement;
    	return true;
    }
	else {
		alert("Sorry, we're out of beans!");
		return false;
	}
  },
  money: 100,
  buySupplies: function (beansPurchased) {
  	if ((coffeeShop.money - beansPurchased * coffeeShop.beans.price) >= 0) {
	  	coffeeShop.beans.amount = coffeeShop.beans.amount + beansPurchased;
  		coffeeShop.money = coffeeShop.money - beansPurchased * coffeeShop.beans.price;
  	}
  	else
  		alert ("You cannot purchase that amount of beans, not enough money!");
  },
  buyDrink: function (drink) {
  	if (coffeeShop.makeDrink(drink)) {
  	coffeeShop.money = coffeeShop.money + coffeeShop.drinkRequirements[drink].drinkPrice;
  	coffeeShop.makeDrink(drink);
  	}
  }
}

coffeeShop.buyDrink("latte");
console.log(coffeeShop.beans.amount); 
console.log(coffeeShop.money);
coffeeShop.buyDrink("ghjgjk");
console.log(coffeeShop.beans.amount); 
// coffeeShop.makeDrink("filtered");
// console.log(coffeeShop.beans.amount); 
// coffeeShop.makeDrink("doubleShot");
// console.log(coffeeShop.beans.amount); 
// coffeeShop.buySupplies(10);
// coffeeShop.makeDrink("frenchPress");
// console.log(coffeeShop.beans.amount); 
