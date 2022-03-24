let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
let prices = [100, 120, 130, 50, 150];
let ids = [1, 2, 3, 4, 5];
let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]
let amount = [1, 1, 1, 1, 1]

let createItem = index => ({
    product_name: names[index],
    amount: amount[index],
    price: prices[index],
    id_product: ids[index],
    img: imgs[index]
});

let fillCatalog = () => {
    // ids.forEach((el, index) => {
    //     catalog.items.push(createItem(index));
    // })
    return ids.map((el, index) => createItem(index))
}

class Basket {
    constructor() {
        this.items = [];
        this.show = false;
        this.container = '.basket-items'
        this.init();

    }

    init() {
        this._render();
        this._eventHandler();
    }

    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (e) => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset);
            }
        });
        document.querySelector('.btn-basket').addEventListener('click', () => {
            this.show = !this.show;
            document.querySelector('.basket-block').classList.toggle('invisible');
        })
        document.querySelector('.catalog-items').addEventListener('click', (e) => {
            if (e.target.name == 'buy') {

                this.add(e.target.dataset);
            }
        });
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="basket-item">
                            <img src="${item.img} " width="70px" alt="${item.product_name} ">
                            <div class="product-desc">
                                <p class="product-title">${item.product_name}</p>
                                <p class="product-amount">${item.amount}</p>
                                <p class="product-single-price">${item.price}</p>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${item.price * item.amount}</p>
                                <button class="del-btn" name="remove" data-id="${item.id_product}">&times;</button>
                            </div>
                        </div>`
        });
        document.querySelector(this.container).innerHTML = htmlStr;//находим товар,
    }

    add(item) {
        let find = this.items.find(el => el.id_product == item.id);
        if (!find) {
            // this.items.push(Object.assign({}, createItem(+item.id - 1), {amount: 1}));
            this.items.push(createItem(+item.id - 1));
        } else {
            find.amount++;
        }
        this._render();
    }

    remove(item) {
        let find = this.items.find(el => el.id_product == item.id);
        if (find.amount == 1) {
            this.items.splice(this.items.indexOf(find), 1);
        } else {
            find.amount--;
        }
        this._render();
    }
}


class Catalog {
    constructor() {
        this.items = [];
        this.container = '.catalog-items';
        this.init();
    }

    init() {
        this.items = fillCatalog();
        this._render();

    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" alt="${item.product_name}">
                        <div class="desc">
                            <h3>${item.product_name}TEST</h3>
                            <p>${item.price} $</p>
                            <button
                                class="buy-btn"
                                name="buy"
                                data-id="${item.id_product}"
                            >Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector(this.container).innerHTML = htmlStr;
    }
}

export default () => {
    let basket = new Basket()
    let catalog = new Catalog()
}

