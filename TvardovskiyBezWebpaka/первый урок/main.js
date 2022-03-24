let names = ['HTML5 & CSS3', 'JavaScript base', 'JavaScript advanced', 'PHP', 'React'];
let prices = [100, 120, 130, 50, 150];
let ids = [1, 2, 3, 4, 5];
let imgs = ['https://static.sobaka.ru/images/image/00/80/54/85/_normal.jpg', 'https://images.androeed.ru/icons/2022/03/19/ico-haker-simulyator-zhizni-smartfon-magnat-bomzhara-1647703922.webp', 'https://coddyschool.com/upload/iblock/a8d/hack3_min.png', "https://3dnews.ru/assets/external/illustrations/2020/01/19/1001778/21.jpg", 'https://thebell.io/wp-content/uploads/2017/12/hacker-2300772_1280.jpg',]

let createItem = index => ({
    product_name: names[index],
    price: prices[index],
    id_product: ids[index],
    img: imgs[index]
});

let fillCatalog = () => {
    ids.forEach((el, index) => {
        catalog.items.push(createItem(index));
        // return ids.map((el, index) => createItem(index))
    });
};

let basket = {
    items: [],
    show: false,
    container: '.basket-items',
    init() {
        this._render();
        this._eventHandler();
    },
    //контейнер в корзине с заполненным заказом
    _eventHandler() {
        //при нажатии на крестик в корзине: находим контейнер с выбранными товарами, цепляем клик к элементу, name которого равен  'remove'
        document.querySelector(this.container).addEventListener('click', (e) => {
            if (e.target.name == 'remove') {
                this.remove(e.target.dataset); //инициируем ф-ю remove c параметром элемента с найденным id (e.target.dataset)
            }

        });
        document.querySelector('.btn-basket').addEventListener('click', () => {
            this.show = !this.show;
// если корзина пустая, при нажатии на кн "basket", '.basket-block' меняется на класс "invisible",
            // появляется блок контейнер
            document.querySelector('.basket-block').classList.toggle('invisible');

        })
    },
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
    },
    add(item) {
        let find = this.items.find(el => el.id_product == item.id);

        if (!find) {
            // this.items.push(Object.assign(item(+item.id - 1)));
            this.items.push(Object.assign({}, createItem(+item.id - 1), {amount: 1}));//если товара нет в корзине, вызывается ф-я "createItem" с параметром
        } else {
            find.amount++;
        }
        this._render();
    },

    remove(item) {
        let find = this.items.find(el => el.id_product == item.id); //ф-я find находит первый элемент(items), соответствующий id продукта, по которому нажата кнопка(id_product должен быть равен item.id)
        console.log(find)
        if (find.amount == 1) {
            this.items.splice(this.items.indexOf(find), 1);//если количество товаров =1, метод splice заменяет присутствующий элемент на тот, который указан в переменной find, удаляя 1 товар
        } else {                                           // иначе, прогружается товар, найденный в перременной find,
            find.amount--;
        }
        this._render();
    }
}

let catalog = {
    items: [],
    container: '.catalog-items',
    basket: basket,

    init() {
        fillCatalog();
        this._render();
        this._eventHandler();
    },
//при нажатии на кн "buy" (смотреть в render), находим контейнер с выбранным товаром, если t.target.name = "buy", вызываем функцию "add" из класса "basket",с параметрами "e.target.dataset"
    _eventHandler() {
        document.querySelector(this.container).addEventListener('click', (e) => {
            if (e.target.name == 'buy') {
                this.basket.add(e.target.dataset);
            }
        });
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `<div class="catalog-item">
                        <img src="${item.img}" width="150px" alt="${item.product_name}">
                        <div class="desc">
                            <h3>${item.product_name}</h3>
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


basket.init();
catalog.init();

let a;
function getRequest (){
    return new Promise((res, rej)=>{
        a = 1000
        setTimeout(()=>{
            if (a){
                res ("a= "+a)
            }else {
                rej("*******OKSANA OKSANA error******* ");
            }
        }, 3000)
    })
}
getRequest()
    .then(resolved =>{
        alert(resolved)
    })
    .catch(napisano=>{
        alert("ничего не получилось")
        throw new Error(napisano)
    })
    .finally(()=>{
        alert("всё кончено")
    })

