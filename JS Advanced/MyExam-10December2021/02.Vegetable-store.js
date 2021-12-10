class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this._history = [];
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(element => {
            let [type, quantity, price] = element.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let currentType = this.availableProducts.find(t => t.type == type);

            if (currentType === undefined) {
                this.availableProducts.push({ type, quantity, price });
                this._history.push(type);
            } else {
                currentType.quantity += quantity;
                if (price > currentType.price) {
                    currentType.price = price;
                }
            }
        });

        return `Successfully added ${this._history.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach(element => {
            let [type, quantity] = element.split(' ');
            quantity = Number(quantity);

            let currentType = this.availableProducts.find(t => t.type === type);
            if (currentType === undefined) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if (quantity > currentType.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            totalPrice += (currentType.price * quantity);
            currentType.quantity -= quantity;
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let currentProduct = this.availableProducts.find(p => p.type === type);
        if (currentProduct === undefined) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (quantity > currentProduct.quantity) {
            currentProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        currentProduct.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`;
    }

    revision() {
        let result = [];
        result.push('Available vegetables:');
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(e => result.push(`${e.type}-${e.quantity}-$${e.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }
}


// // Input 1
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// // Input 2
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// // Input 3
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Input 4
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());