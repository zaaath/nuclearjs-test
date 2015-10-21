export default {
	getProducts(cb) {
		setTimeout(() => {
			cb({
				products: [
					{
						id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2, image: "../common/assets/ipad-mini.png"
					},
					{
						id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10, image: "../common/assets/t-shirt.png"
					},
					{
						id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 4, image: "../common/assets/sucker.png"
					}
				]
			});
		}, 500);
	}
}