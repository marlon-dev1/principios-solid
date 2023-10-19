type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(public name: string = '', public price: number = 0, public size: Size = '') {}

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string>this[key]).length <= 0) throw Error(`${key} is empty`);
                case 'number':
                    if (<number>this[key] <= 0) throw Error(`${key} is zero`);

                    break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }

        return true;
    }

    toString() {
        // No DRY = don't repeat your self
        // if (this.name.length <= 0) throw Error('Name is empty');
        // if (this.price <= 0) throw Error('Price is empty');
        // if (this.size.length <= 0) throw Error('Size is empty');
        if (!this.isProductReady()) return;
        return `${this.name} ${this.price}, ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue pants', 10);
    console.log(bluePants.toString());
})();
