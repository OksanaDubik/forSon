function makeGETRequest(url) {
    return new Promise((res, rej) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    res(JSON.parse(xhr.responseText));
                } else {
                    rej(" *****server Error***** ");
                }
            }
        };

        xhr.send();
    })
}

let items;//рабочий
// let url = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"

let url = "https://raw.githubusercontent.com/OksanaDubik/forSon/basket/TvardovskiyBezWebpaka/repositoriy"

// makeGETRequest(url)
//     .then(data => {
//         items = data
//
//
//     })
//     .catch(err => {
//         throw new Error(err)
//     })


//костыли рабочие
// let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
// let prices = [100, 120, 130, 50, 150];
// let ids = [1, 2, 3, 4, 5];
// let imgs = ['http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150', 'http://placehold.it/200x150'];
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
//
//
// let fillCatalog = () => {
//     // ids.forEach((el, index) => {
//     //     catalog.items.push(createItem(index));
//     // })
//     return ids.map((el, index) => createItem(index))
// }

/**
 *_eventHandler() - ф-я при нажатии на крестик в корзине: находим контейнер с выбранными товарами, цепляем клик к элементу, name которого равен  'remove'
 * remove(item) - ф-я find находит первый элемент(items), соответствующий id продукта, по которому нажата кнопка(id_product должен быть равен item.id)
 * @find.amount == 1-если количество товаров =1, метод splice заменяет присутствующий элемент на тот, который указан в переменной find, удаляя 1 товар, иначе, прогружается товар, найденный в перременной find
 */

class Basket {
    constructor() {
        this.items = [];
        this.show = false;
        this.container = '.basket-items'
        this.init();

    }

    init() {
        this._render();//рабочий
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

        makeGETRequest(url)
            .then(data => {

                data.map(el => {
                    el.amount = "1"
                })

                items = data;
                // items.map(el => {
                //     el.amount = "1"
                // })

                let find = items.find(el => el.id_product == item.id);

                if (this.items.length===0) {

                    this.items.push(find);


                }else if(this.items.length>0){
                    find.amount++;
                    this.items.push(find);
                }

                // else {
                //
                //     find.amount++;
                // }
                this._render();
            })
            .catch(err => {
                throw new Error(err)
            })

        // makeGETRequest(url)
        //     .then(data => {
        //     this.items = data;
        //      this.items.map(el => {
        //             el.amount = "1"
        //         })
        //
        //     })
        //     .catch(err => {
        //         throw new Error(err)
        //     })
        //
        // let find =this.items.find(el => el.id_product == item.id);
        // if (!find) {
        //
        //     this.items.push(find);
        //     this._render();
        //
        // } else {
        //
        //     find.amount++;
        // }
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
        this.init()//рабочий
    }

    init() {//рабочий было init()
        // this.items = fillCatalog();
        makeGETRequest(url)
            .then(data => {
                this.items = data;
                this._render();
            })
            .catch(err => {
                throw new Error(err)
            })

    }


    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="catalog-item">
                            <img src="'https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg'" alt="${item.product_name}">
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


    //рабочий:
    // _render() {
    //     let htmlStr = '';
    //     this.items.forEach(item => {
    //         htmlStr += `<div class="catalog-item">
    //                     <img src="${item.img}" alt="${item.product_name}">
    //                     <div class="desc">
    //                         <h3>${item.product_name}TEST</h3>
    //                         <p>${item.price} $</p>
    //                         <button
    //                             class="buy-btn"
    //                             name="buy"
    //                             data-id="${item.id_product}"
    //                         >Buy</button>
    //                     </div>
    //                 </div>`
    //     })
    //     document.querySelector(this.container).innerHTML = htmlStr;
    // }
}

let basket = new Basket()
// basket.add(() => {
//     basket._render()
// })
let catalog = new Catalog()
// catalog.init(()=>{
//     catalog._render()
// })


