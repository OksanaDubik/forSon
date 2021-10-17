const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

const searchInput = document.querySelector(".goods-search");
const searchBtn = document.querySelector(".search-button")

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filtred= [];
    }

    filter(searchString){
        searchString=searchString.trim()

        if (searchString===0){
            this.filtred = this.goods;
            this.render()
            return
        }
        const reg = new RegExp(searchString, "i");
        this.filtred = this.goods.filter((good)=> reg.test(good.title))
        this.render()


        let quantity = 0;
        for (let sum of this.filtred) {
            quantity += sum.price;

        }
        searchBtn.addEventListener("click", function (){
            alert(quantity)
        })
    }



    fetchGoods() {
        fetch(`${API_URL}catalogData.json`)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                this.goods = request.map(good => ({title: good.product_name, price: good.price}))
                this.filtred=this.goods;
                this.render();
            })
            .catch((err) => {
                console.log(err.text)
            })

    }

    render() {
        let listHtml = '';
        this.filtred.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;

    }

}

const list = new GoodsList();
searchInput.addEventListener("input", ()=>{
    list.filter(searchInput.value);
})
list.fetchGoods();

