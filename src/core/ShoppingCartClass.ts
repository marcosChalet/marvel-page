import ComicsInterface from "./Comics.interface";
import ShoppingCartInterface from "./ShoppingCart.interface";

export default class ShoppingCartClass implements ShoppingCartInterface {
	constructor(public cart: ComicsInterface[]) {}

	static empty() {
		return new ShoppingCartClass([]);
	}

	add(item: ComicsInterface) {
		this.cart.push(item);
	}
}
