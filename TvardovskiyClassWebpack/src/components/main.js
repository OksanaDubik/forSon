//https://raw.githubusercontent.com/gavrilovem/catalogData/master/catalogData.json
//https://raw.githubusercontent.com/gavrilovem/catalogData/master/getBasket.json

class List {
    constructor(url, container, basket) {
        this.url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses' + url;
        this.container = container;
        this.items = [];
        this._init(basket);
    }

    _init(basket = false) {
        this._get(this.url)
            .then(data => {
                this.items = !basket ? data : data.contents;
                // this.items = data.length ? data : data.contents;
                //catalog => [...], basket => {... contents: [...]}
                this._render();
                this._handleEvents();
                console.log(this.constructor.name, this)
            })
    }

    _get(url) {
        return fetch(url).then(data => data.json());
    }

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += new connect[this.constructor.name](item).render();
        })
        document.querySelector(this.container).innerHTML = htmlStr;
    }

    _handleEvents() {
        return ''
    }
}

class Item {
    constructor(item) {
        this.item = item;
    }

    render() {
        return `<div class="catalog-item">
                    <img src="http://placehold.it/300x200" alt="${this.item.product_name}">
                    <div class="desc">
                        <h3>${this.item.product_name}</h3>
                        <p>${this.item.price} $</p>
                        <button 
                            class="buy-btn" 
                            name="buy"
                            data-name="${this.item.product_name}"
                            data-price="${this.item.price}"
                            data-id="${this.item.id_product}"
                        >Buy</button>
                    </div>
                </div>`
    }
}

class Catalog extends List {
    constructor(basket, url = '/catalogData.json', container = '.catalog-items') {
        super(url, container);
        this.basket = basket;
    }

    _handleEvents() {
        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name == 'buy') {
                this.basket.add(evt.target.dataset);
            }
        });
    }
}

class Basket extends List {
    constructor(items, url= '/getBasket.json', container = '.basket-items', basket = true) {
        super(url , container, basket);
        this.items = []
    }

    _handleEvents() {

        document.querySelector(this.container).addEventListener('click', evt => {
            if (evt.target.name == 'remove') {
                this.remove(evt.target.dataset.id);
            }
        });

        document.querySelector('.btn-basket').addEventListener('click', evt => {

            document.querySelector('.basket-block').classList.toggle('invisible');

            console.log(this.items)
        });
    }

    add(item) {

        let find = this.items.find(el => el.id_product == item.id);
        if (find) {
            find.quantity++;
            this._render();
        } else {
            let itemNew = {id_product: item.id, product_name: item.name, price: +item.price, quantity: 1};
            this.items.push(itemNew);
            this._render();
        }
    }

    remove(itemId) {
        let find = this.items.find(el => el.id_product == itemId);
        console.log('попытка удалить ' + itemId)

        if (!find) {
            this.items.splice(this.items.indexOf(find), 1);
            // find.quantity--;
            this._render()

        } else if (find && find.quantity > 0) {
            find.quantity--;
            // this.items.splice(this.items.indexOf(find), 1);
            this._render()
        }
    }
}

class CatalogItem extends Item {
}

class BasketItem extends Item {
    constructor(item) {
        super(item)
    }

    render() {
        return `<div class="basket-item">
                    <img src="http://placehold.it/100x80" alt="${this.item.product_name}">
                    <div class="product-desc">
                        <p class="product-title">${this.item.product_name}</p>
                        <p class="product-amount">${this.item.quantity}</p>
                        <p class="product-single-price">${this.item.price}</p>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.item.price * this.item.quantity}</p>
                        <button class="del-btn" name="remove" data-id="${this.item.id_product}">&times;</button>
                    </div>
                </div>`
    }
}


let connect = {
    'Catalog': CatalogItem,
    'Basket': BasketItem
}

// let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
// let prices = [100, 120, 130, 50, 150];
// let ids = [1, 2, 3, 4, 5];
// let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150',]
// let amount = [1, 1, 1, 1, 1]
//
// let createItem = index => ({
//     product_name: names[index],
//     amount: amount[index],
//     price: prices[index],
//     id_product: ids[index],
//     img: imgs[index]
// });
//
// let fillCatalog = () => {
//     // ids.forEach((el, index) => {
//     //     catalog.items.push(createItem(index));
//     // })
//     return ids.map((el, index) => createItem(index))
// }
//
// class Basket {
//     constructor() {
//         this.items = [];
//         this.show = false;
//         this.container = '.basket-items'
//         this.init();
//
//     }
//
//     init() {
//         this._render();
//         this._eventHandler();
//     }
//
//     _eventHandler() {
//         document.querySelector(this.container).addEventListener('click', (e) => {
//             if (e.target.name == 'remove') {
//                 this.remove(e.target.dataset);
//             }
//         });
//         document.querySelector('.btn-basket').addEventListener('click', () => {
//             this.show = !this.show;
//             document.querySelector('.basket-block').classList.toggle('invisible');
//         })
//         document.querySelector('.catalog-items').addEventListener('click', (e) => {
//             if (e.target.name == 'buy') {
//
//                 this.add(e.target.dataset);
//             }
//         });
//     }
//
//     _render() {
//         let htmlStr = '';
//         this.items.forEach(item => {
//             htmlStr += `<div class="basket-item">
//                             <img src="${item.img} " width="70px" alt="${item.product_name} ">
//                             <div class="product-desc">
//                                 <p class="product-title">${item.product_name}</p>
//                                 <p class="product-amount">${item.amount}</p>
//                                 <p class="product-single-price">${item.price}</p>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${item.price * item.amount}</p>
//                                 <button class="del-btn" name="remove" data-id="${item.id_product}">&times;</button>
//                             </div>
//                         </div>`
//         });
//         document.querySelector(this.container).innerHTML = htmlStr;//находим товар,
//     }
//
//     add(item) {
//         let find = this.items.find(el => el.id_product == item.id);
//         if (!find) {
//             // this.items.push(Object.assign({}, createItem(+item.id - 1), {amount: 1}));
//             this.items.push(createItem(+item.id - 1));
//         } else {
//             find.amount++;
//         }
//         this._render();
//     }
//
//     remove(item) {
//         let find = this.items.find(el => el.id_product == item.id);
//         if (find.amount == 1) {
//             this.items.splice(this.items.indexOf(find), 1);
//         } else {
//             find.amount--;
//         }
//         this._render();
//     }
// }
//
//
// class Catalog {
//     constructor() {
//         this.items = [];
//         this.container = '.catalog-items';
//         this.init();
//     }
//
//     init() {
//         this.items = fillCatalog();
//         this._render();
//
//     }
//
//     _render() {
//         let htmlStr = '';
//         this.items.forEach(item => {
//             htmlStr += `<div class="catalog-item">
//                         <img src="${item.img}" alt="${item.product_name}">
//                         <div class="desc">
//                             <h3>${item.product_name}TEST</h3>
//                             <p>${item.price} $</p>
//                             <button
//                                 class="buy-btn"
//                                 name="buy"
//                                 data-id="${item.id_product}"
//                             >Buy</button>
//                         </div>
//                     </div>`
//         })
//         document.querySelector(this.container).innerHTML = htmlStr;
//     }
// }

export default () => {
    let basket = new Basket()
    let catalog = new Catalog(basket)
}

